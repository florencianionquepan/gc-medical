import { Link } from "react-router-dom";

export const ProductCard = ({product}) => {

  const imagePath = '/img/products/'.concat(product.image);

  return (
    <div className="card card-custom">
        <img src={imagePath} className="card-img-top img-fluid" alt={product.name}/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text"> Proveedor: {product.provider} </p>
            <div className="d-flex justify-content-end me-4">
              <Link to={`/productos/${product.id}`} className="btn btn-gris">
                Ver detalles
              </Link>
            </div>
        </div>
    </div>
  )
}
