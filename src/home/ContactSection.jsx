import { ComunidadComponent } from "../assets/ComunidadComponent"

export const ContactSection = () => {
  return (
    <>
        <div className='p-3 m-5 border border-gris border-5 rounded rozha-one'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center my-3'>
                  <h1 className="display-2"> Contacto </h1>
                  <a className="btn btn-gris btn-lg">Ver mas</a>
                </div>
                <div className='col-12 col-md-6 display-6 my-3'>
                  <ComunidadComponent/>
                </div>
            </div>
        </div>
    </>
  )
}
