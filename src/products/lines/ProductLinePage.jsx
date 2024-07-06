import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsByLine } from '../helpers/getProductsByLine';
import {ProductCard} from '../ProductCard';
import { TitleLineComponent } from './TitleLineComponent';
import { SearchComponent } from '../../assets/SearchComponent';

export const ProductLinePage = () => {

  const {linea} = useParams();
  //const navigate = useNavigate();

  const [products, setProducts] = useState([]);

    useEffect(() => {
      const products = getProductsByLine(linea);
      setProducts(products);
      //console.log(products);
    }, [linea]);

  //logica filtrado
  const [search, setSearch] = useState("");

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  //al inicio, search es una cadena vacia. todos cumplen esa condicion
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) || 
    product.provider.toLowerCase().includes(search.toLowerCase())
  );  

  const showSearch = (products.length>3);

  return (
    <div className='container-md'>
      <div className='row m-5'>
        <TitleLineComponent title={linea} />
      </div>
      
      { showSearch && 
        <SearchComponent onSearch={handleSearch}/>
      }
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
