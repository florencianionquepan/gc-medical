import { Link } from 'react-router-dom'

export const AboutSection = () => {
  return (
    <div className='row align-items-center m-5 border border-gris border-5 rounded rozha-one bg-gris'>
      <div className='col-12 col-md-7 text-center my-3 my-md-0'>
        <img className='img-fluid rounded' src={'/img/nosotros.webp'}/>
      </div>
      <div className='col-12 col-md-5 display-6 text-center py-2 bg-body rounded'>
        <h1 className="display-2 text-md-start mb-0"> Sobre </h1>
        <h1 className="display-2 text-md-end mt-0"> nosotros </h1>
        <Link className="btn btn-gris btn-lg" to='/nosotros'>Ver mas</Link>
      </div>
    </div>
  )
}
