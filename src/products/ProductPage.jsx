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

    //logica filtrado - toda la logica luego pasarla a un archivo aparte
  const [search, setSearch] = useState("");

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  //al inicio, search es una cadena vacia. todos cumplen esa condicion
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) || 
    product.provider.toLowerCase().includes(search.toLowerCase())
  );  



  return (
    <div className='container-md'>
        <SearchComponent onSearch={handleSearch} />
        <div className='row m-5'>
            { filteredProducts.map((pro)=>(
                <div key={pro.id} className="col-6 col-md-4 mb-3">
                    <ProductCard product={pro}/>
                </div>
            ))}
        </div>
    </div>
  )
}
