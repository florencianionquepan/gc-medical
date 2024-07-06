import { useState, useEffect } from 'react';
import {getProducts} from './helpers/getProducts';
import { ProductCard } from './ProductCard';

import './products.css';
import { SearchComponent } from '../assets/utils/SearchComponent';

export const ProductPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const products = getProducts();
      setProducts(products);
      //console.log(products);
    }, []);


  return (
    <div className='container-md'>
        <SearchComponent/>
        <div className='row m-5'>
            { products.map((pro)=>(
                <div key={pro.id} className="col-6 col-md-4 mb-3">
                    <ProductCard product={pro}/>
                </div>
            ))}
        </div>
    </div>
  )
}
