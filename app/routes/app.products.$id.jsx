import { useParams } from "@remix-run/react";
import { useContext } from 'react'
import { MyContext } from '../MyContext';


export default function ProductPage(){
    const { allProducts, setAllProducts } = useContext(MyContext);

    console.log('allProducts', allProducts)
    const params = useParams();
    return (
        <h2>A Blog Post titled {params.id}</h2>
        )
}
