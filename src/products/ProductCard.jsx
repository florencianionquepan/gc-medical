export const ProductCard = ({product}) => {

  const imagePath = '/img/products/'.concat(product.image);

  return (
    <div className="card card-custom">
        <img src={imagePath} className="card-img-top img-fluid" alt={product.name}/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Linea: {product.line} - Proveedor: {product.provider} </p>
            <a href="#" className="btn btn-primary">Ver detalles</a>
        </div>
    </div>
  )
}