import { Pagination, Card,
  ResourceList,
  Avatar,
  ResourceItem,
  Text, } from "@shopify/polaris";
import { MyContext } from '../MyContext';
import { useState, useContext, useEffect } from 'react'
import { Link } from "@remix-run/react";


export default function ProductsView(){
  const { dbProductsFormatted } = useContext(MyContext);

  const [pageLimit, setPageLimit] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState('DATE_MODIFIED_DESC');

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
          <Pagination
                 hasPrevious={indexOfFirstItem !== 0}
                 onPrevious={() => {onPreviousPage()}}
                 hasNext={(Object.entries(dbProductsFormatted).length - (pageLimit * currentPage)) > 0}
                 onNext={() => {onNextPage()}} />
             {currentItems.length > 0 && <ResourceList
        resourceName={{singular: 'product', plural: 'products'}}
        items={currentItems}
        renderItem={(item) => {
          const id = item[0].split('/Product/').pop()
          const title = Object.entries(item[1])[0][1].title.split('-')[0]
          const url = `products/${id}`
          return (
            <ResourceItem
              id={id}
              url={url}
              accessibilityLabel={`View details for ${title}`}
            >
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {title}
              </Text>
            </ResourceItem>
          );
        }}
        showHeader
        totalItemsCount={dbProductsFormatted ? Object.entries(dbProductsFormatted).length : 50}
      />}

             

               <Pagination
                 hasPrevious={indexOfFirstItem !== 0}
                 onPrevious={() => {onPreviousPage()}}
                 hasNext={(Object.entries(dbProductsFormatted).length - (pageLimit * currentPage)) > 0}
                 onNext={() => {onNextPage()}} />
            </div>
    )
}
