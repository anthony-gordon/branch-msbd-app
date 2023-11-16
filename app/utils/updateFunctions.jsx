import db from "./../db.server";

async function metafieldUpdateGraphQL(variantId, variantShippingMessage, admin){
    const response = await admin.graphql(`
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

const {
data: {
    productVariantUpdate: { product },
},
} = await response.json();
return product
}

export async function metafieldsUpdate(array, admin){
    let updates = [];
    const promises = array.map((arrayRow) => {
        let variantId = Object.keys(arrayRow)[0].split('/ProductVariant/').pop();
        let variantShippingMessage = Object.values(arrayRow)[0];
        let product = metafieldUpdateGraphQL(variantId, variantShippingMessage, admin)
        updates.push(product)
    })

    
    await Promise.all(promises);
    return updates;
  }

  export async function dbUpdate(array){
    let currentTime = new Date();

    const promises = array.map(({productVariantId, processingTime, dateAvailable, productId, productHandle, title, b2bProduct, bundleProduct, overrideMessage, shipDateMessage}) => db.variantShipDateData.upsert(
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
                shipDateMessage: shipDateMessage
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
                updated: currentTime
            }
        }
    ))

    await Promise.all(promises);
  }
