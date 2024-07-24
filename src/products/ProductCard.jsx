import { Link } from "react-router-dom";
import { ImageComponent } from "../assets/utils/ImageComponent";

export const ProductCard = ({product}) => {

  const imagePath = '/img/products/'.concat(product.image);

  return (
    <>
      <div className="card card-product pt-4 mx-auto position-relative">
        <div className="picture">
          <div className='box-custom-product mb-3 mx-4'>
              <div className='rounded-circle border border-5 border-white text-center'>
                <ImageComponent 
                  hash={product.hash}
                  claseHash={'rounded-circle border border-gris-12 d-block w-100'}
                  path={imagePath}
                  clase={'rounded-circle border border-gris-12 d-block w-100'}
                  imageAlt={product.name}
                />
              </div>
          </div>
          <div className="card-body bg-naranja title-product-custom" style={{zIndex:10}}>
              <h6 className="card-title text-end text-white mb-0 text-decoration-none inter">
                  {product.name}
              </h6>
          </div>
        </div>
        <Link to={`/productos/${product.id}`} 
              className="btn btn-light border text-center py-3 fs-5 link-container">
              Ver más &rarr;
        </Link> 
        <div className="bg-celeste text-white py-2" style={{zIndex:10}}>
          <h6 className="mb-0 mx-2 inter text-uppercase"> {product.provider} </h6>
        </div>
      </div>
      
    </>
    
  )
}
