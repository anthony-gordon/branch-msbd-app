import { Pagination } from "@shopify/polaris";
import { MyContext } from '../MyContext';
import { useState, useContext, useEffect } from 'react'
import { Link} from "@remix-run/react";


export default function ProductsView(){
  const { allProducts, setAllProducts } = useContext(MyContext);

  const [pageLimit, setPageLimit] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * pageLimit;
  const indexOfFirstItem = indexOfLastPost - pageLimit;
  console.log(indexOfLastPost, indexOfFirstItem, Object.entries(allProducts))

  const [currentItems, setCurrentItems] = useState(Object.entries(allProducts).slice(indexOfFirstItem, indexOfLastPost));
  console.log('currentItems', currentItems)

  useEffect(() => {
    const indexOfLastPost = currentPage * pageLimit;
    const indexOfFirstItem = indexOfLastPost - pageLimit;
    setCurrentItems(Object.entries(allProducts).slice(indexOfFirstItem, indexOfLastPost));

  }, [currentPage]);

  function onNextPage(){
    setCurrentPage(currentPage + 1);
  }

  function onPreviousPage(){
    setCurrentPage(currentPage - 1);
  }



    return (
        <div>
             {currentItems.map((currentItem, index) => (
               <li key={index}><Link to={`/app/products/${currentItem[1].id.split('/Product/').pop()}`} >{currentItem[1].title}</Link></li>
             )) 
             }
               <Pagination
                 hasPrevious={indexOfFirstItem !== 0}
                 onPrevious={() => {onPreviousPage()}}
                 hasNext={(Object.entries(allProducts).length - (pageLimit * currentPage)) > 0}
                 onNext={() => {onNextPage()}} />
            </div>
    )
}
