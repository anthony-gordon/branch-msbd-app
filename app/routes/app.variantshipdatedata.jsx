import { json, redirect } from "@remix-run/node";
import {
    useLoaderData,
    useSubmit,
  } from "@remix-run/react";
import shopify from '~/shopify.server';

import { fetchDBShipDateData, fetchSettings } from "../models/variantShipDateData.server";
import db from "../db.server";
import { useState, useContext, useEffect } from 'react'
import { returnDBShipDateStrings, formatCurrentProductData, returnVariantsToUpdateShipDateStrings, formatBulkDataOperationJSON } from "../utils/dataFormattingFunctions"
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

async function fetchDbProducts(){
    let dbProducts = fetchDBShipDateData();

    return dbProducts
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

export async function loader({ request }) {
    const { admin } = await shopify.authenticate.admin(request);

    const [bulkOperation, dbProducts, settings] = await Promise.all([
        startBulkOperation(admin),
        fetchDbProducts(),
        fetchSettings()
    ])

    const url = await fetchBulkOperationData(bulkOperation, admin);
    const products = await fetchProductsFromUrl(url.data.node.url)

    return json({bulkOperation, dbProducts, url, products, settings});
  }

  

  export async function action({ request, params }){
    const { admin } = await shopify.authenticate.admin(request);

    const data = await request.formData();

    let array = [];
    let submission_type = '';

    for (var pair of data.entries()) {
        if(JSON.parse(pair[1])['submission_type']){
            submission_type = JSON.parse(pair[1])['submission_type'];
        } else {
            array.push(JSON.parse(pair[1]));
        }
    }

    if(submission_type == 'update_db'){
        await dbUpdate(array);
    } else if (submission_type == 'update_metafields'){
        await metafieldsUpdate(array, admin);
    }
    
  return redirect(`/app/variantshipdatedata`);
  }

    export default function variantShipDataDataList(){

      useEffect(() => {
       
      }, []);


        const loadData = useLoaderData();
        const [currentOffset, setCurrentOffset ] = useState(0);
        
        const { allProducts, setAllProducts } = useContext(MyContext);
        const dbShipDateData = loadData.dbProducts
        const settings = loadData.settings[0]
        const products = loadData.products
        useEffect(()=>{
          setAllProducts(formattedProducts);
        }, [])
        
        const formattedProducts = formatBulkDataOperationJSON(products);

        let dataBaseObjectAllProducts = formatCurrentProductData(formattedProducts, settings);

        let dbShipDateStrings = returnDBShipDateStrings(dbShipDateData);
        let currentShipDateStrings = returnCurrentShipDateStrings(dataBaseObjectAllProducts, settings);
        let variantsToUpdateShipDateStrings = returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings)

        console.log('products', formattedProducts)

        const submit = useSubmit();

        function handleUpdateMetafieldsClick(){
            variantsToUpdateShipDateStrings['submission_type'] = JSON.stringify({submission_type: 'update_metafields'});

            let formData = new FormData();

            Object.keys(variantsToUpdateShipDateStrings).forEach(key => {
                if (typeof variantsToUpdateShipDateStrings[key] !== 'object') {
                formData.append(key, variantsToUpdateShipDateStrings[key])
            }
                else {
                    formData.append(key, JSON.stringify(variantsToUpdateShipDateStrings[key]))
                }
            })

            let array = [];
            let submission_type = '';

            for (var pair of formData.entries()) {
                if(JSON.parse(pair[1])['submission_type']){
                    submission_type = JSON.parse(pair[1])['submission_type'];
                } else {
                    array.push(JSON.parse(pair[1]));
                }
            }

            if(array.length > 0){
                submit(variantsToUpdateShipDateStrings, { method: "post" });
            }
        }

        function handleUpdateDataBaseClick(){
          dataBaseObjectAllProducts['submission_type'] = JSON.stringify({submission_type: 'update_db'});
            
          submit(dataBaseObjectAllProducts, { method: "post" });
        }

        console.log('allProducts', allProducts)
    return (
        <div>
            <button onClick={() => handleUpdateDataBaseClick()}>Submit</button>
            <button onClick={() => handleUpdateMetafieldsClick(variantsToUpdateShipDateStrings)}>Update metafields</button>
            {Object.keys(allProducts).length > 0 ? (
            <ProductsView />) : (
              <div>Nothing here!</div>
            )}
        </div>
        
    )
}
