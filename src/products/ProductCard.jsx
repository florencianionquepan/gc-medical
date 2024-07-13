import { Link } from "react-router-dom";

export const ProductCard = ({product}) => {

  const imagePath = '/img/products/'.concat(product.image);

  return (
    <>
      <div className="card card-product pt-4 mx-auto position-relative">
        <div className='box-custom-product mb-3 me-3'>
            <div className='border rounded-circle shadow-custom-product'>
                <div className='rounded-circle border border-5 border-white'>
                <img src={imagePath} className="img-fluid rounded-circle border border-gris-12" alt={product.name}/>
                </div>
            </div>
        </div>
        <div className="card-body bg-naranja title-product-custom" style={{zIndex:10}}>
            <h6 className="card-title text-end text-white rozha-one mb-0 text-decoration-none">
                {product.name}
            </h6>
        </div> 
        <div className="bg-celeste text-white py-2">
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
