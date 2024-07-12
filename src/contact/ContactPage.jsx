import { ItemLocation } from './ItemLocation'
import { ItemPhone } from './ItemPhone'
import { ItemEmail } from './ItemEmail'
import './contact.css';

export const ContactPage = () => {
  return (
    <>
      <div className='container-md my-5 text-center mx-auto'>
      <h2 className="border-bottom pb-2 text-md-start"> Contactate con nosotros </h2>
        <div className='row justify-content-center mt-5 align-items-center'>
          {/* Primera columna */}
          <div className="col-12 col-sm-10 col-lg-6 col-xxl-5 mt-5">
            <div className="row h-100 mt-5 mb-1 mb-md-5 justify-content-center">
              <div className="col-10 h-100">
                    <ItemLocation/>
              </div>
            </div>
          </div>

          {/* Segunda columna */}
          <div className="col-12 col-sm-10 col-lg-6 col-xxl-5">
            <div className="row justify-content-center my-5 my-md-1">
              <div className="col-10 my-5">
                    <ItemPhone/>
              </div>

              <div className="col-10 my-5">
                    <ItemEmail/>
              </div>

            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}
