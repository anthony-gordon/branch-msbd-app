import { Pagination } from "@shopify/polaris";
import { MyContext } from '../MyContext';
import { useState, useContext, useEffect } from 'react'
import { Link } from "@remix-run/react";


export default function ProductsView(){
  const { dbProductsFormatted } = useContext(MyContext);

  const [pageLimit, setPageLimit] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * pageLimit;
  const indexOfFirstItem = indexOfLastPost - pageLimit;

  const [currentItems, setCurrentItems] = useState(Object.entries(dbProductsFormatted).slice(indexOfFirstItem, indexOfLastPost));

  useEffect(() => {
    const indexOfLastPost = currentPage * pageLimit;
    const indexOfFirstItem = indexOfLastPost - pageLimit;
    setCurrentItems(Object.entries(dbProductsFormatted).slice(indexOfFirstItem, indexOfLastPost));

  }, [currentPage]);

  function onNextPage(){
    setCurrentPage(currentPage + 1);
  }

  function onPreviousPage(){
    setCurrentPage(currentPage - 1);
  }
    return (
        <div>
             {currentItems.length > 0 && currentItems.map((currentItem, index) => (
               <li key={index}><Link to={`/app/products/${currentItem[0].split('/Product/').pop()}`} >{Object.entries(currentItem[1])[0][1].title.split('-')[0]}</Link></li>
             )) 
             }
               <Pagination
                 hasPrevious={indexOfFirstItem !== 0}
                 onPrevious={() => {onPreviousPage()}}
                 hasNext={(Object.entries(dbProductsFormatted).length - (pageLimit * currentPage)) > 0}
                 onNext={() => {onNextPage()}} />
            </div>
    )
}
