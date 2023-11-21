import { useParams } from "@remix-run/react";
import { useContext, useState, useEffect } from 'react'
import { MyContext } from '../MyContext';
import { formatDbProducts } from "../utils/dataFormattingFunctions"
import {Page, Card, DataTable} from '@shopify/polaris';
import { Link } from "@remix-run/react";


export default function VariantPage(){
    const { dbProducts, setDbProducts } = useContext(MyContext);
    const params = useParams();


    const [rows, setRows] = useState([]);
    const [currentProduct, setCurrentProduct] = useState([])
    const [currentVariant, setCurrentVariant] = useState([])

    useEffect(() => {
        console.log('currentProduct', currentProduct, 'currentVariant', currentVariant)
        if(currentProduct && currentProduct.length == 0 && dbProducts && dbProducts.length > 0){
            setCurrentProduct(formatDbProducts(dbProducts)[`gid://shopify/Product/${params.id}`]);
            setCurrentVariant(formatDbProducts(dbProducts)[`gid://shopify/Product/${params.id}`][`gid://shopify/ProductVariant/${params.variantId}`])
        }
        let updateRows = []
        if(currentProduct && Object.keys(currentProduct).length > 0 && currentVariant && Object.keys(currentVariant).length > 0){
            let updatedRecordArray = currentVariant.updatedRecord.split('},{')
            console.log('here', currentVariant.id, 'updatedRecordArry', updatedRecordArray);
            let updateRows = []

            updatedRecordArray.forEach((updatedRecordRow) => {
                let row = []
                let dateString = Date.parse(updatedRecordRow.split(': ').shift().replaceAll(',', '').replaceAll('}', '').replaceAll('{', ''));
                let messageString = updatedRecordRow.split(': ').pop().replaceAll(',', '').replaceAll('}', '').replaceAll('{', '')
                let date =  new Date(dateString)
                console.log('dateString', dateString, messageString)
                row.push(`${date.toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                  })} - EST`);
                row.push(messageString)
                updateRows.push(row) 

            })
            console.log('updateRows', updateRows)
            setRows(updateRows);

            // Object.entries(currentVariant).forEach(([key, value]) => {
            //     let row = [];
            //     row.push(value.title.split(' - ').pop());
            //     row.push(value.productVariantId.split('ProductVariant/').pop());
                
            //     updateRows.push(row) 
            //   });
              
            
        }
      
      }, [dbProducts, currentProduct, currentVariant]);

    

    return (
        <Page title={`Variant change log: ${Object.keys(currentVariant).length > 0 && currentVariant.productVariantId.split('/ProductVariant/').pop()} (${Object.keys(currentVariant).length > 0 && currentVariant.title})`}>
            {Object.keys(currentVariant).length > 0 && <Link to={`/app/products/${params.id}`} >Back to: {currentVariant.title.split(' - ').shift()}</Link>}
            <Card>
                <DataTable
                columnContentTypes={[
                    'date',
                    'text'
                ]}
                headings={[
                    'Date/time changed',
                    'Message'
                ]}
                rows={rows}
                />
            </Card>
            </Page>
        )
}
