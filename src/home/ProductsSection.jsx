import { Link } from "react-router-dom"
import { Carousel } from "./Carousel"

export const ProductsSection = () => {
  return (
    <div className='row align-items-center justify-content-center m-5 border border-gris border-5 rounded rozha-one'>
      <div className='col-12 col-lg-6 order-2 p-0'>
        <Carousel/>
      </div>
      <div className='col-12 col-lg-6 text-center my-3 rounded order-1'>
        <h1 className="display-2"> Productos </h1>
        <Link className="btn btn-gris btn-lg" to='/productos' >Ver mas</Link>
      </div>
    
    </div>
  )
}
