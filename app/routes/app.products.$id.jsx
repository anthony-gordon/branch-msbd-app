import { useParams } from "@remix-run/react";
import { useContext, useState, useEffect } from 'react'
import { MyContext } from '../MyContext';
import { formatDbProducts } from "../utils/dataFormattingFunctions"
import {Page, Card, DataTable} from '@shopify/polaris';
import { Link } from "@remix-run/react";


export default function ProductPage(){
    const { dbProducts, setDbProducts } = useContext(MyContext);
    const params = useParams();


    const [rows, setRows] = useState([]);
    const [currentProduct, setCurrentProduct] = useState([])

    console.log('currentProduct', currentProduct, formatDbProducts(dbProducts));


    useEffect(() => {
        if(currentProduct && currentProduct.length == 0 && dbProducts && dbProducts.length > 0){
            setCurrentProduct(formatDbProducts(dbProducts)[`gid://shopify/Product/${params.id}`]);
        }
        let updateRows = []
        if(currentProduct && Object.keys(currentProduct).length > 0){
            console.log('here', currentProduct)
            Object.entries(currentProduct).forEach(([key, value]) => {
                let row = [];
                row.push(value.title.split(' - ').pop());
                row.push(value.productVariantId.split('ProductVariant/').pop());
                row.push(value.dateAvailable);
                row.push(value.processingTime);
                row.push(value.shipDateMessage);
                row.push(<Link to={`/app/product/${params.id}/variants/${value.productVariantId.split('ProductVariant/').pop()}`} >See change log</Link>);
        
                updateRows.push(row) 
              });
              
            
        }
      
        setRows(updateRows);
      }, [dbProducts, currentProduct]);

    

    return (
        <Page title="Ship date message by variant">
            <Link to={`/app`} >Back to product list</Link>
            <Card>
                <DataTable
                columnContentTypes={[
                    'text',
                    'text',
                    'date',
                    'numeric',
                    'text',
                    'text'
                ]}
                headings={[
                    'Variant title',
                    'Variant ID',
                    'Date available',
                    'Processing time',
                    'Ship date message',
                    'Ship date message record'
                ]}
                rows={rows}
                />
            </Card>
            </Page>
        )
}
