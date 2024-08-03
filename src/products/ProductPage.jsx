import { useState, useEffect } from 'react';
import {getProducts} from './helpers/getProducts';
import { ProductCard } from './ProductCard';

import './products.css';
import { SearchComponent } from '../assets/utils/SearchComponent';
import { PaginationComponent } from '../assets/utils/PaginationComponent';
import { usePagination } from './hooks/usePagination';
import { useSearch } from './hooks/useSearch';

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
    <div className='container-md'>
        <SearchComponent onSearch={handleSearch} />
        <div className='row m-5'>
            { paginatedProducts.map((pro)=>(
                <div key={pro.id} className="col-6 col-md-4 mb-3">
                    <ProductCard product={pro}/>
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
