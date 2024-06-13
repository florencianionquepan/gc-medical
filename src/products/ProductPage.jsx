import { useState, useEffect } from 'react';
import {getProducts} from './helpers/getProducts';
import { ProductCard } from './ProductCard';

import './products.css';

export const ProductPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const products = getProducts();
      setProducts(products);
      //console.log(products);
    }, []);


  return (
    <div className='container-md'>
        <div className='row m-5'>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Buscar producto..." aria-label="Search"/>
            </form>
        </div>
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
