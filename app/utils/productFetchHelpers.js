import  axios  from "axios";
import { createInterface } from 'node:readline'

export async function fetchProductsFromUrl(url){
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

export async function startBulkOperation(admin){

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
    
    export async function fetchBulkOperationData(bulkOperation, admin){
    
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
