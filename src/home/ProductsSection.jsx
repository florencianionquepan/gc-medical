import { Link } from "react-router-dom"
import { Carousel } from "./Carousel"

export const ProductsSection = () => {
  return (
    <div className='row align-items-center justify-content-center m-5 border border-gris border-5 rounded rozha-one'>
      <div className='col-12 col-lg-6 display-6 border-5 border-gris order-2'>
        {/* <div className="row align-items-center mx-auto rounded bg-body mt-2">
          <div className="col-6">
            <img src={'/img/supplier/lexel.webp'} className="img-fluid" alt="lexel"/>
          </div>
          <div className="col-6">
            <img src={'/img/supplier/promedon.webp'} className="img-fluid" alt="promedon"/>
          </div>
        </div>
        <div className="row py-3">
          <div className="col text-center">
          <img src={'/img/supplier/medtronic.webp'} className="img-fluid w-50" alt="promedon"/>
          </div>
        </div> */}
        <Carousel/>
      </div>
      <div className='col-12 col-lg-6 text-center my-3 rounded order-1'>
        <h1 className="display-2"> Productos </h1>
        <Link className="btn btn-gris btn-lg" to='/productos' >Ver mas</Link>
      </div>
    
    </div>
  )
}
