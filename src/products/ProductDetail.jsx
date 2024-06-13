import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {getProductById} from './helpers/getProductById';

export const ProductDetail = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const product = useMemo( ()=> getProductById(id), [id]);

  const imagePath = '/img/products/'.concat(product.image);

  const splitDescription = (description) => {
    const parts = description.split('.'); 
    return parts.map((part, index) => (
      <p key={index}>{part.trim()}.</p> 
    ));
  };


  return (
    <div className='container-md'>
        <div className='row m-5'>
          <div className='col-6'>
            <img
              src={imagePath}
              alt={product.name}
              className="rounded-lg border border-gray-500 shadow-violet p-2 m-2 img-responsive img-detail"
            />
          </div>
          <div className='col-4'>
            <h5>
              {product.name}
            </h5>
            {splitDescription(product.description)}
          
          </div>
        </div>
    </div>
  )
}
