export function returnDBShipDateStrings(dbData){
    let dbShipDateStrings = {};

    dbData.forEach((dbDataRow) => {
        dbShipDateStrings[`${dbDataRow.productVariantId}`] = dbDataRow.shipDateMessage;
    })

    return dbShipDateStrings
  }

  function updateBundleProductValues(bundleProductsArray, dataBaseObjectAllProducts){
    bundleProductsArray.forEach((bundleProductVariantId) => {

        let currentDate = new Date();
        let currentDateString = currentDate.toLocaleDateString("en-US").split('/').reverse().join('-');

        let furthestData = {
            processingTime: 0,
            dateAvailable: `${currentDateString}`
        }

        let processingTimeArray = [];
        let dateAvailableArray = [];

        let bundleProductData = JSON.parse(dataBaseObjectAllProducts[`${bundleProductVariantId}`]);
        let bundleProductConstituentsData = JSON.parse(JSON.parse(bundleProductData.bundleProducts));

        bundleProductConstituentsData.forEach((bundleProductConstituentData) => {
            let constituentProcessingTime = JSON.parse(dataBaseObjectAllProducts[`gid://shopify/ProductVariant/${bundleProductConstituentData.variantId}`]).processingTime;
            let constituentDateAvailable = JSON.parse(dataBaseObjectAllProducts[`gid://shopify/ProductVariant/${bundleProductConstituentData.variantId}`]).dateAvailable;

            processingTimeArray.push(constituentProcessingTime);
            dateAvailableArray.push(constituentDateAvailable);
        })

        let sortedProcessingTimeArray = [...processingTimeArray].sort(function(a, b) {
            return a - b;
          }).reverse();

        let sortedDateAvailableArray = [...dateAvailableArray].sort(function(a, b) {
            return new Date(a) - new Date(b);
          }).reverse();

        furthestData.processingTime = sortedProcessingTimeArray[0];
        furthestData.dateAvailable = sortedDateAvailableArray[0];

        let bundleProductVariantRowData = JSON.parse(dataBaseObjectAllProducts[`${bundleProductVariantId}`]);
        
        bundleProductVariantRowData.processingTime = furthestData.processingTime;
        bundleProductVariantRowData.dateAvailable = furthestData.dateAvailable;

        dataBaseObjectAllProducts[`${bundleProductVariantId}`] = JSON.stringify(bundleProductVariantRowData);

    })
  }

  export function formatCurrentProductData(currentProductData, settings){
    let defaultProcessingTime = parseInt(settings.defaultProcessingTime)
    let currentDate = new Date();
    let currentDateString = currentDate.toLocaleDateString("en-US").split('/').reverse().join('-');

    
            let dataBaseObjectAllProducts = {};
            let bundleProductsArray = [];
            for (const [key, arrayRow] of Object.entries(currentProductData)) {
                for (const [key, variant] of Object.entries(arrayRow.variants)) {
                        let tags = arrayRow.tags.map(v => v.toLowerCase())
                        let dataBaseUpdateObject = {
                            productId: arrayRow.id,
                            productVariantId: variant.id,
                            title: `${arrayRow.title} - ${variant.title}`,
                            shop: 'anthony-branch-dev-store-2022',
                            productHandle: arrayRow.handle,
                            shipDateMessage: '',
                            b2bProduct: tags.includes('b2b') ? true : false,
                            bundleProduct: tags.includes('bundle') ? true : false,
                        };
    
                        dataBaseUpdateObject['processingTime'] = variant["processing_time"] ? variant["processing_time"] : `${defaultProcessingTime}`;
                        dataBaseUpdateObject['dateAvailable'] = variant["date_available"] ? variant["date_available"] : `${currentDateString}`;
                        dataBaseUpdateObject['overrideMessage'] = variant["shipping"] ? variant["shipping"] : '';
                        dataBaseUpdateObject['bundleProducts'] = variant["bundle_products"] ? variant["bundle_products"] : '';
                        dataBaseUpdateObject['shipDateMessage'] = variant["ship_date_string"] ? variant["ship_date_string"] : '';
                        dataBaseUpdateObject['shipDateMessageId'] = variant["ship_date_string_id"] ? variant["ship_date_string_id"] : '';


                        dataBaseObjectAllProducts[`${variant.id}`] = JSON.stringify(dataBaseUpdateObject);
                    
                }
            }

            if(bundleProductsArray.length > 0){
                updateBundleProductValues(bundleProductsArray, dataBaseObjectAllProducts);
            }
    return dataBaseObjectAllProducts;
  }

  export function returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings){
    let variantsToUpdateShipDateStrings = {};
    for (const [key, value] of Object.entries(currentShipDateStrings)) {
        let update = true;
        for (const [dbVariantId, dbShippingMessage] of Object.entries(dbShipDateStrings)) {
            if(key === dbVariantId) {
                if(value === dbShippingMessage){
                    update = false;
                }
            }
        }   
        if(update == true){
            let updateObject = {};
            updateObject[`${key}`] = value;
            variantsToUpdateShipDateStrings[`${key}`] = JSON.stringify(updateObject);
        }
      }

    
    return variantsToUpdateShipDateStrings
  }

  function findParentProductId(variantId, formattedProducts){
    let id;

    for (const [key, value] of Object.entries(formattedProducts)) {
        if(value.variants && value.variants[`${variantId}`]) {
            id = value.id;
            break;
        }
    }

    return id
  }

  export function formatBulkDataOperationJSON(productsObject){
    let formattedProducts = {};

    for (const [key, value] of Object.entries(productsObject)) {
        if(!value[`__parentId`]){ 
                 formattedProducts[`${value.id}`] = value;
                 formattedProducts[`${value.id}`]['variants'] = {};
            } else if(value[`__parentId`] && value[`__parentId`].includes('/Product/')){
                formattedProducts[`${value[`__parentId`]}`]['variants'][`${value['id']}`] = value
            } else if(value[`__parentId`] && value[`__parentId`].includes('/ProductVariant/')) {
                let parentProductId = findParentProductId(value[`__parentId`], formattedProducts);
                formattedProducts[`${parentProductId}`]['variants'][`${value["__parentId"]}`][`${value["key"]}`] = value['value'];
                formattedProducts[`${parentProductId}`]['variants'][`${value["__parentId"]}`][`${value["key"]}_id`] = value['id'];
            }
          }

    return formattedProducts
  }

  export function formatDbProducts(dbProducts){
    let formattedDbProducts = {};

    for (const [key, value] of Object.entries(dbProducts)) {
        if(!formattedDbProducts[`${value.productId}`]){ 
          formattedDbProducts[`${value.productId}`] = {};
          formattedDbProducts[`${value.productId}`][`${value.productVariantId}`] = value;
            } else {
              formattedDbProducts[`${value.productId}`][`${value.productVariantId}`] = value;
            }
           }

    return formattedDbProducts
  }

export function returnMetafieldIds(currentData){
  let metafieldIds = {};

  for (const [key, value] of Object.entries(currentData)) {
    metafieldIds[`${key}`] = JSON.parse(value)['shipDateMessageId'];
  }


  return metafieldIds
}
