import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getProductById } from './helpers/getProductById';
import { TitleProductComponent } from './TitleProductComponent';
import { ImageComponent } from '../assets/utils/ImageComponent';

export const ProductDetail = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const product = useMemo( ()=> getProductById(id), [id]);

  const imagePath = product? '/img/products/'.concat(product.image): '';

  const splitDescription = (description) => {
    const parts = description.split('.');
    const filteredParts = parts.filter(part => part.trim() !== ''); 
    return filteredParts.map((part, index) => (
      <p key={index} className='fs-5 inter'>
        {part.trim()}
        {part.endsWith(':')?'':'.'}
      </p> 
    ));
  };

  const onNavigateBack = () =>{
    navigate(-1);
  }

  if(!product){
    return <Navigate to='/productos'/>
  }

  return (
    <div className='container-md' style={{minHeight:'60vh'}}>
        <div className='row mx-5 mt-5 rozha-one border-bottom pb-2 align-items-center'>
          <div className='col-auto'>
            <button className='btn btn-light btn-lg pb-0' 
            onClick={()=>onNavigateBack()}>
              <i className="bi bi-arrow-left fs-4"></i>
            </button>
          </div>
          <div className='col-10'>
          <TitleProductComponent title={product.name}/>
          </div>
          
        </div>
        <div className='row mx-5 mb-5 mt-2'>
          <h4 className='inter'>{product.provider}</h4>
        </div>
        <div className='row m-5 justify-content-center'>
          <div className='col-10 col-md-10 col-lg-6 col-xl-5 card-detail border rounded'>
              <div className='box-custom-product mx-4'>
                  <div className='rounded-circle border border-5 border-white text-center'>
                    <ImageComponent
                      hash={product.hash}
                      claseHash={'rounded-circle border border-gris-12 d-block w-100'}
                      path={imagePath}
                      clase={'rounded-circle border border-gris-12 d-block w-100 img-responsive'}
                      imageAlt={product.name}
                    />
                  </div>
              </div>
          </div>
          <div className='col-11 col-md-10 col-lg-8 col-xl-7 px-4'>

            {splitDescription(product.description)}
          
          </div>
        </div>
    </div>
  )
}
