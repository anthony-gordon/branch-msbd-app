import { json, redirect } from "@remix-run/node";
import {
    useActionData,
    useSubmit,
    useNavigation
  } from "@remix-run/react";
import shopify from '~/shopify.server';

import { useState, useContext, useEffect  } from 'react'
import { returnDBShipDateStrings, returnMetafieldIds, formatCurrentProductData, returnVariantsToUpdateShipDateStrings, formatBulkDataOperationJSON, returnCurrentProductsArrayDifferences } from "../utils/dataFormattingFunctions"
import { returnCurrentShipDateStrings } from "../utils/msbdFunctions"
import { fetchProductsFromUrl, startBulkOperation, fetchBulkOperationData } from "../utils/productFetchHelpers"
import { metafieldsUpdate, dbUpdate } from "../utils/updateFunctions"
import { MyContext } from '../MyContext';
import ProductsView from '../components/ProductsView'
import { fetchDBShipDateData } from "../models/variantShipDateData.server";
import { ProgressBar } from '@shopify/polaris';

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
    let type = '';
    let currentProductDataArray = []

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
        if(JSON.parse(pair[1])['type']){
          type = JSON.parse(pair[1])['type'];
        }    
        if(!JSON.parse(pair[1])['submission_type'] && !JSON.parse(pair[1])['settings'] && !JSON.parse(pair[1])['db_products'] && !JSON.parse(pair[1])['type']){
          currentProductDataArray.push(JSON.parse(pair[1]));
        }
    }

    const formattedProducts = formatBulkDataOperationJSON(products);
    let currentProductsDataAllObject = formatCurrentProductData(formattedProducts, settings);
    let currentProductsArray = []
    for (const [key, value] of Object.entries(currentProductsDataAllObject)) {
      currentProductsArray.push(JSON.parse(value))
    }
    let dbShipDateStrings = returnDBShipDateStrings(dbShipDateData);
    let currentShipDateStrings = returnCurrentShipDateStrings(currentProductsDataAllObject, settings);
    let metafieldIds = returnMetafieldIds(currentProductsDataAllObject);
    let variantsToUpdateShipDateStrings = returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings)

    let numberToUpdate = variantsToUpdateShipDateStrings == {} ? 0 : Object.entries(variantsToUpdateShipDateStrings).length;
    let numberLeftToUpdate = variantsToUpdateShipDateStrings == {} || Object.entries(variantsToUpdateShipDateStrings).length - 10 < 0 ? 0 : Object.entries(variantsToUpdateShipDateStrings).length - 10;
    
    let currentProductsArrayDifferences = returnCurrentProductsArrayDifferences(currentProductsArray, dbShipDateData)
    
    if(submission_type == 'update_db'){
        if(currentProductsArrayDifferences.length > 0){
          await dbUpdate(currentProductsArrayDifferences);
        }
        const updatedDbProducts = await fetchDBShipDateData()

        return json({
          currentProductsDataAllObject, 
          currentProductsArray, 
          numberToUpdate, 
          numberLeftToUpdate, 
          submission_type, 
          updatedDbProducts,
          type,
          currentProductsArrayDifferences,
          currentProductDataArray,
          dbShipDateData
        })
    } else if (submission_type == 'update_metafields'){
      
      
      for (const [key, value] of Object.entries(variantsToUpdateShipDateStrings)) {
        array.push(JSON.parse(value))
      }
      
      const mfUpdate = await metafieldsUpdate(array, admin, metafieldIds);
      // const dbUpdateToken = await dbUpdate(currentProductsArray);


      return json({formattedProducts, 
        currentProductsDataAllObject, 
        dbShipDateStrings, 
        currentShipDateStrings, 
        variantsToUpdateShipDateStrings, 
        submission_type,
        settings,
        array,
        dbShipDateData,
        mfUpdate,
        metafieldIds,
        // dbUpdateToken,
        numberLeftToUpdate,
        numberToUpdate,
        type,
        currentProductDataArray
        })
    }
    
  return redirect(`/app/variantshipdatedata`);
  }

    export default function variantShipDataDataList(){        
        const { dbProducts, setDbProducts } = useContext(MyContext);
        const { settings, setSettings } = useContext(MyContext);
        const { updating, setUpdating } = useContext(MyContext);
        const { amountToUpdate, setAmountToUpdate } = useContext(MyContext);
        const { amountLeftToUpdate, setAmountLeftToUpdate } = useContext(MyContext);
        const { percentageUpdated, setPercentageUpdated } = useContext(MyContext);


        const { state, formData } = useNavigation();


        const submit = useSubmit();

        const actionData = useActionData();

        console.log('actionData', actionData)

        useEffect(() => {
          if(actionData !== undefined){
            if(actionData.submission_type == "update_db"){
              setDbProducts(actionData.updatedDbProducts)
            }
            if(actionData.numberToUpdate > 0 && actionData.numberLeftToUpdate > 0){
              setUpdating(true);
              let percentageUpdatedAmount = 0;
              percentageUpdatedAmount = parseInt(100 * ((parseInt(amountToUpdate) - parseInt(actionData.numberLeftToUpdate))/parseInt(amountToUpdate)))
              if(actionData.type == 'click'){
                percentageUpdatedAmount = parseInt(100 * ((parseInt(actionData.numberToUpdate) - parseInt(actionData.numberLeftToUpdate))/parseInt(actionData.numberToUpdate)));
                setAmountToUpdate(actionData.numberToUpdate);
              }
              setAmountLeftToUpdate(actionData.numberLeftToUpdate);
              setPercentageUpdated(percentageUpdatedAmount);
              if(actionData.submission_type == "update_db"){
                handleUpdateMetafieldsClick();
              } else if (actionData.submission_type == "update_metafields") {
                handleUpdateDataBaseClick()
              }
            } else {
              setUpdating(false);
              setAmountToUpdate(0);
              setAmountLeftToUpdate(0);
              setPercentageUpdated(100);
            }
          }
          
        }, [actionData]);


        function handleUpdateMetafieldsClick(type){
          setUpdating(true);
          if(type == 'click'){
            setPercentageUpdated(0);
          }
          let submission = {};
          submission['settings'] = JSON.stringify({settings: settings[0]});
          submission['submission_type'] = JSON.stringify({submission_type: 'update_metafields'});
          submission['db_products'] = JSON.stringify({db_products: dbProducts});

          if(type == 'click'){
            submission['type'] = JSON.stringify({type: 'click'})
          } else {
            submission['type'] = JSON.stringify({type: 'auto'})
          }
          

          submit(submission, { method: "post" });
        }

        function handleUpdateDataBaseClick(){
          let submission = {};
          submission['submission_type'] = JSON.stringify({submission_type: 'update_db'});
          submission['settings'] = JSON.stringify({settings: settings[0]});
          submission['db_products'] = JSON.stringify({db_products: dbProducts});
          
          submit(submission, { method: "post"});
        }

    return (
        <div>
            {updating && <div style={{width: 225}}>{percentageUpdated}%<ProgressBar progress={percentageUpdated} /></div>}
            <div>{ state }</div>
            {amountLeftToUpdate > 0 && <div>{amountLeftToUpdate} / {amountToUpdate}</div>}
            <button onClick={() => handleUpdateDataBaseClick()}>Update Products Database</button>
            <button onClick={() => handleUpdateMetafieldsClick('click')}>Update Product Metafields</button>
            {Object.keys(dbProducts).length > 0 ? (
            <ProductsView />) : (
              <div>Nothing here!</div>
            )}
        </div>
        
    )
}
