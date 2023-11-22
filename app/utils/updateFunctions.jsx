import db from "./../db.server";

async function metafieldUpdateGraphQLCall(variantId, variantShippingMessage, admin, metafieldId) {
    const response = await admin.graphql(
        metafieldId && metafieldId !== '' ?
        `
    mutation {
        productVariantUpdate(
        input : {
            id: "gid://shopify/ProductVariant/${variantId}",
            metafields: [
                {
                    id: "${metafieldId}"
                    namespace: "variant"
                    key: "ship_date_string"
                    value: "${variantShippingMessage}"
                    type: "single_line_text_field"
                }
            ]
        }) {
            productVariant {
            metafields(first: 10) {
                edges {
                node {
                    namespace
                    key
                    value
                }
                }
            }
            }
        }
        }
` : `
mutation {
    productVariantUpdate(
    input : {
        id: "gid://shopify/ProductVariant/${variantId}",
        metafields: [
            {
                namespace: "variant"
                key: "ship_date_string"
                value: "${variantShippingMessage}"
                type: "single_line_text_field"
            }
        ]
    }) {
        productVariant {
        metafields(first: 10) {
            edges {
            node {
                namespace
                key
                value
            }
            }
        }
        }
    }
    }
`);

    const data = await response.json();
    return data
}

function metafieldUpdateGraphQL(variantId, variantShippingMessage, admin, metafieldId){
    return new Promise(async (resolve, reject) => {
       const result = await metafieldUpdateGraphQLCall(variantId, variantShippingMessage, admin, metafieldId);
       resolve(result);
    })
    
}

function individualMetafieldUpdate(arrayRow, admin, metafieldIds, updates ){
    let variantId = Object.keys(arrayRow)[0].split('/ProductVariant/').pop();
    let metafieldId = metafieldIds[`${Object.keys(arrayRow)[0]}`];
    let variantShippingMessage = Object.values(arrayRow)[0];
    updates.push(metafieldId)


    return new Promise((resolve, reject) => {
        metafieldUpdateGraphQL(variantId, variantShippingMessage, admin, metafieldId).then(() => {
            resolve();
        })
    })
    // const product = await metafieldUpdateGraphQL(variantId, variantShippingMessage, admin, metafieldId);

    // return product

}

export async function metafieldsUpdate(array, admin, metafieldIds){
    let updates = [];
    // const promises = array.map((arrayRow) => {
    //     new Promise((resolve, reject) => {
    //         individualMetafieldUpdate(arrayRow, admin, updates, metafieldIds).then(() => {
    //             resolve();
    //         })

    //     })
    // })

    // await individualMetafieldUpdate(array[0], admin, metafieldIds, updates)


    
    // await Promise.all(promises).then(() => {
    //     return updates;
    // });

    try {
        // const results = await Promise.all(
        //     array.map(async (arrayRow) => {
                
        //         let variantId = Object.keys(arrayRow)[0].split('/ProductVariant/').pop();
        //         let metafieldId = metafieldIds[`${Object.keys(arrayRow)[0]}`];
        //         updates.push(arrayRow)
        //         let variantShippingMessage = Object.values(arrayRow)[0];
        //         await metafieldUpdateGraphQL(variantId, variantShippingMessage, admin, metafieldId);
        //     })
        // )
        // return results
        let index = 0
                    for (const arrayRow in array){
                        if(index < 10){
                        let variantId = Object.keys(array[`${index}`])[0].split('/ProductVariant/').pop();
                        let metafieldId = metafieldIds[`${Object.keys(array[`${index}`])[0]}`];
                        updates.push(array[`${index}`])
                        let variantShippingMessage = Object.values(array[`${index}`])[0];
                        const result = await metafieldUpdateGraphQL(variantId, variantShippingMessage, admin, metafieldId);
                        index = index + 1;
                    }   
                }
                             
    } catch (error){
        console.error("An error occurred:", error);
    }
    return updates

  }

  export async function dbUpdate(array){
    let currentTime = new Date();

    const promises = array.map(({productVariantId, processingTime, dateAvailable, productId, productHandle, title, b2bProduct, bundleProduct, overrideMessage, shipDateMessage, updatedRecord}) => db.variantShipDateData.upsert(
        {
            where: {
                productVariantId: productVariantId
            },
            update: {
                processingTime: `${processingTime}`,
                dateAvailable: `${dateAvailable}`,
                bundleProduct: bundleProduct,
                b2bProduct: b2bProduct,
                updated: currentTime,
                overrideMessage: overrideMessage,
                shipDateMessage: shipDateMessage,
                updatedRecord: updatedRecord
            },
            create: {
                processingTime: `${processingTime}`,
                dateAvailable: `${dateAvailable}`,
                productVariantId: productVariantId,
                productId: productId,
                title: title,
                shop: '',
                productHandle: productHandle,
                shipDateMessage: shipDateMessage,
                bundleProduct: bundleProduct,
                b2bProduct: b2bProduct,
                overrideMessage: overrideMessage,
                updated: currentTime,
                updatedRecord: ''
            }
        }
    ))

    await Promise.all(promises);
    return 'done'
  }


export async function settingsUpdate(data){
    const {buffer, defaultProcessingTime, dtcDateAvailableMessage, dtcProcessingTimeMessage, dtcDefaultShippingRange,b2bDefaultShippingRange,  b2bDateAvailableMessage, b2bProcessingTimeMessage} = data;
    await db.settings.update({ 
    where: 
        { 
            id: 1 
        }, 
    data:
        {
            buffer: parseInt(buffer), 
            defaultProcessingTime: parseInt(defaultProcessingTime), 
            dtcDateAvailableMessage: dtcDateAvailableMessage, 
            dtcProcessingTimeMessage: dtcProcessingTimeMessage, 
            dtcDefaultShippingRange: parseInt(dtcDefaultShippingRange),
            b2bDefaultShippingRange: parseInt(b2bDefaultShippingRange),
            b2bDateAvailableMessage: b2bDateAvailableMessage, 
            b2bProcessingTimeMessage: b2bProcessingTimeMessage
        }
    });
  }


