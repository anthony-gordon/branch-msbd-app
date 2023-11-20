import { json, redirect } from "@remix-run/node";
import {
    useLoaderData,
    useActionData,
    useSubmit,
    useNavigation
  } from "@remix-run/react";
import shopify from '~/shopify.server';

import { fetchDBShipDateData, fetchSettings } from "../models/variantShipDateData.server";
import db from "../db.server";
import { useState, useContext, useEffect } from 'react'
import { returnDBShipDateStrings, returnMetafieldIds, formatCurrentProductData, returnVariantsToUpdateShipDateStrings, formatBulkDataOperationJSON } from "../utils/dataFormattingFunctions"
import { returnCurrentShipDateStrings } from "../utils/msbdFunctions"
import { metafieldsUpdate, dbUpdate } from "../utils/updateFunctions"
import  axios  from "axios";
import { createInterface } from 'node:readline'
import { MyContext } from '../MyContext';
import ProductsView from '../components/ProductsView'


async function startBulkOperation(admin){

const response = await admin.graphql(`
mutation {
  bulkOperationRunQuery(
   query: """
    {
      products {
        edges {
          node {
            id
            title
            handle
            tags
            variants {
                edges {
                    node {
                        id
                        title
                        metafields {
                            edges {
                                node {
                                    key
                                    value
                                    id
                                }
                            }
                        }
                    }
                }
            }
          }
        }
      }
    }
    """
  ) {
    bulkOperation {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
`)

const {
  data: {
    bulkOperationRunQuery: { bulkOperation },
  },
} = await response.json();

console.log('response', response)

return bulkOperation
}

const poll = async function (fn, fnCondition, ms) {
    let result = await fn();
    while (fnCondition(result)) {
      await wait(ms);
      result = await fn();
    }
    return result;
  };
  
  const wait = function (ms = 1000) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  const validate = function(result){
    return result.data.node.url === null;
  }

async function fetchBulkOperationData(bulkOperation, admin){

    async function helper(){
        const response = await admin.graphql(`
        query {
        node(id: "${bulkOperation.id}") {
          ... on BulkOperation {
            url
            partialDataUrl
          }
        }
      }
    `);
        let data1 = await response.json();

        return data1
    }
    
    let data = await poll(helper, validate, 1000)
    
    return data;
}


async function fetchProductsFromUrl(url){
    var cleanedUrl = url.replace(/\n|\r|\s/g, '');

    const response = await axios.get(`${url}`, {
        responseType: 'stream'
        })

    const rl = createInterface({
        input: response.data
        })

    let object = {};
    let index = 0

    for await (const line of rl) {
        // do something with the current line
        object[`${index}`] = JSON.parse(line);
        index++
        }

    // const data = await response.json()

    return object
}

  export async function action({ request, params }){
    const { admin } = await shopify.authenticate.admin(request);

    const [bulkOperation] = await Promise.all([
        startBulkOperation(admin)
    ])

    const url = await fetchBulkOperationData(bulkOperation, admin);
    const products = await fetchProductsFromUrl(url.data.node.url)

    const data = await request.formData();

    let array = [];
    let submission_type = '';
    let settings = {};
    let dbShipDateData = {}

    for (var pair of data.entries()) {
        if(JSON.parse(pair[1])['submission_type']){
            submission_type = JSON.parse(pair[1])['submission_type'];
        }
        if(JSON.parse(pair[1])['settings']){
            settings = JSON.parse(pair[1])['settings'];
        }
        if(JSON.parse(pair[1])['db_products']){
          dbShipDateData = JSON.parse(pair[1])['db_products'];
        }        
    }

    const formattedProducts = formatBulkDataOperationJSON(products);
    let dataBaseObjectAllProducts = formatCurrentProductData(formattedProducts, settings);
    let currentProductsArray = []
    for (const [key, value] of Object.entries(dataBaseObjectAllProducts)) {
      currentProductsArray.push(JSON.parse(value))
    }
    if(submission_type == 'update_db'){
        await dbUpdate(currentProductsArray);
        return json({dataBaseObjectAllProducts, currentProductsArray})
    } else if (submission_type == 'update_metafields'){
      
      let dbShipDateStrings = returnDBShipDateStrings(dbShipDateData);
      let currentShipDateStrings = returnCurrentShipDateStrings(dataBaseObjectAllProducts, settings);
      let metafieldIds = returnMetafieldIds(dataBaseObjectAllProducts);
      let variantsToUpdateShipDateStrings = returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings)

      for (const [key, value] of Object.entries(variantsToUpdateShipDateStrings)) {
        array.push(JSON.parse(value))
      }
      
      const mfUpdate = await metafieldsUpdate(array, admin, metafieldIds);
      const dbUpdateToken = await dbUpdate(currentProductsArray);


      return json({formattedProducts, 
        dataBaseObjectAllProducts, 
        dbShipDateStrings, 
        currentShipDateStrings, 
        variantsToUpdateShipDateStrings, 
        submission_type,
        settings,
        array,
        dbShipDateData,
        mfUpdate,
        metafieldIds,
        dbUpdateToken})
    }
    
  return redirect(`/app/variantshipdatedata`);
  }

    export default function variantShipDataDataList(){        
        const { dbProducts, setDbProducts } = useContext(MyContext);
        const { settings, setSettings } = useContext(MyContext);
        const { updating, setUpdating } = useContext(MyContext);

        const actionData = useActionData();

        useEffect(() => {
          if(actionData !== undefined){
            setUpdating(false)
          }
        }, [actionData]);

        const submit = useSubmit();

        function handleUpdateMetafieldsClick(){
          setUpdating(true);
          let submission = {};
          submission['settings'] = JSON.stringify({settings: settings[0]});
          submission['submission_type'] = JSON.stringify({submission_type: 'update_metafields'});
          submission['db_products'] = JSON.stringify({db_products: dbProducts})

          submit(submission, { method: "post" });
        }

        function handleUpdateDataBaseClick(){
          let submission = {};
          submission['submission_type'] = JSON.stringify({submission_type: 'update_db'});
          submission['settings'] = JSON.stringify({settings: settings[0]});

          submit(submission, { method: "post" });
        }

    return (
        <div>
            {updating && <div>Updating</div>}
            <button onClick={() => handleUpdateDataBaseClick()}>Update Products Database</button>
            <button onClick={() => handleUpdateMetafieldsClick()}>Update Product Metafields</button>
            {Object.keys(dbProducts).length > 0 ? (
            <ProductsView />) : (
              <div>Nothing here!</div>
            )}
        </div>
        
    )
}
