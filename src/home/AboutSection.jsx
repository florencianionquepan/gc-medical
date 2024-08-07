import { Link } from 'react-router-dom'
import { ImageComponent } from '../assets/utils/ImageComponent'

export const AboutSection = () => {
  return (
    <div className='row align-items-center m-5 border border-gris border-5 rounded rozha-one overflow-hidden'>
      <div className='col-12 col-md-7 text-center my-3 my-md-0 order-2 p-0 mb-0 overflow-hidden' style={{maxHeight:'900px !important'}}>
        <ImageComponent 
            hash={'LDC%,5Sk^%_M?uD*M|RPvxRPtmV@'}
            claseHash={'img-fluid rounded hash-nosotros'}
            path={'/img/nosotros.webp'}
            clase={'rounded img-nosotros'}
            imageAlt={'imagen del local'}
            imageVisible={true}
            />
      </div>
      <div className='col-12 col-md-5 display-6 text-center py-2 bg-body rounded order-1'>
        <h1 className="display-2 text-md-start mb-0 ms-md-5"> Sobre </h1>
        <h1 className="display-2 text-md-end mt-0"> nosotros </h1>
        <Link className="btn btn-gris btn-lg" to='/nosotros'>Ver mas</Link>
      </div>
    </div>
  )
}
