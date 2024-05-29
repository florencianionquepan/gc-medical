import React from 'react'

export const ContactPage = () => {
  return (
    <>
      <div className='container-md my-5 text-center mx-auto'>
        <div className='row justify-content-center'>
          {/* Primera columna */}
          <div className="col-lg-4 m-1">
            <div className="row justify-content-center h-100">
              <div className="col-10 h-100 border border-secondary">
                    PRIMERA COLUMNA
              </div>
            </div>
          </div>

          {/* Segunda columna */}
          <div className="col-lg-4 mx-1">
            <div className="row justify-content-center">
              <div className="col-10 border border-secondary my-1">
                    TELEFONO
              </div>

              <div className="col-10 border border-secondary my-1">
                    EMAIL
              </div>

            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}
