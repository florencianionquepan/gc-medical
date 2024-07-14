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
              <h6 className="card-title text-end text-white rozha-one mb-0 text-decoration-none">
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
        {/* <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text"> Proveedor: {product.provider} </p>
            <div className="d-flex justify-content-end me-4">
              <Link to={`/productos/${product.id}`} className="btn btn-gris">
                Ver detalles
              </Link>
            </div>
        </div> */}
      </div>
      
    </>
    
  )
}
