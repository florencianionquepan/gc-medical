import { useState, useEffect } from 'react';
import {getProducts} from './helpers/getProducts';
import { ProductCard } from './ProductCard';

import './products.css';
import { SearchComponent } from '../assets/utils/SearchComponent';
import { PaginationComponent } from '../assets/utils/PaginationComponent';
import { usePagination } from './hooks/usePagination';
import { useSearch } from './hooks/useSearch';
import {BreakpointIndicator} from './../assets/utils/BreakpointIndicator';

export const ProductPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const products = getProducts();
      setProducts(products);
      //console.log(products);
    }, []);

  
    const {handleSearch, showSearch, filteredProducts} = useSearch(products);

    const { cardsPerPage, currentPage, setCurrentPage, paginatedProducts} = usePagination("todas", filteredProducts);
   

  return (
    <div className='container-lg'>
      <BreakpointIndicator/>
        <SearchComponent onSearch={handleSearch} />
        <div className='row m-3 m-sm-5 justify-content-center justify-content-lg-start'>
            { paginatedProducts.map((pro)=>(
                <div key={pro.id} className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mb-3">
                    <ProductCard product={pro} imageVisible={true}/>
                </div>
            ))}
        </div>

        <div className='d-flex m-5 justify-content-center justify-content-md-end'>
          <PaginationComponent
            totalCards={filteredProducts.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>

    </div>
  )
}
