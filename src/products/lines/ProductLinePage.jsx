import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsByLine } from '../helpers/getProductsByLine';
import {ProductCard} from '../ProductCard';
import { TitleLineComponent } from './TitleLineComponent';

export const ProductLinePage = () => {

  const {linea} = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

    useEffect(() => {
      const products = getProductsByLine(linea);
      setProducts(products);
      console.log(products);
    }, [linea]);

  const showSearch = (products.length>3);

  return (
    <div className='container-md'>
      <div className='row m-5'>
        <TitleLineComponent title={linea} />
      </div>
      
      { showSearch && 
        <div className='row m-5'>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Buscar por nombre o por linea..." aria-label="Search"/>
            </form>
        </div>
      }
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
