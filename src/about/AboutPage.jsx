import { useEffect } from "react";
import { AboutComponent } from "./AboutComponent"
import { ValuesComponent } from "./ValuesComponent";
import {info} from "./data/info";
import './about.css';


export const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='container-xl'>
      <h2 className="border-bottom pb-2 text-md-start mt-5 mx-5"> Sobre nuestra empresa </h2>
      {/* <BreakpointIndicator/> */}
        <div className='row justify-content-center m-3'>
          {/* Mision */}
          <div className='col-12 col-sm-10 col-md-8 my-3'>
            <AboutComponent
                title={info[0].title}
                text={info[0].text}
                />
          </div>
          {/* Vision */}
          <div className='col-12 col-sm-10 col-md-8 my-3'>
          <AboutComponent
                title={info[1].title}
                text={info[1].text}
                />
          </div>
        </div>
        {/* Valores */}
        <div className="row justify-content-center mt-3">
          <div className="col-12 col-sm-10 col-md-8 ps-5 ms-md-5 mt-3">
            <h5 className="rozha-one fs-4">
              {info[2].title}
            </h5>
          </div>
        </div>
        <div className="row justify-content-center mb-3 mx-4 mx-sm-5 inter">
            {info[2].texts.map((val)=>(
              <ValuesComponent key={val.id}
                                title={val.title}
                                text={val.text}
              />
            ))}
        </div>
        {/* Nuestra historia */}
        <div className="row justify-content-center align-items-center m-3">
          <div className='col-12 col-sm-10 col-md-8 my-3'>
            <AboutComponent
                  title={info[3].title}
                  text={info[3].text}
                  adClass={'pb-5'}
                  />
          </div>
        </div>
        {/* Segunda parte de nuestra historia */}
        <div className="row justify-content-center align-items-center mx-sm-3 custom-component">
          <div className='col-12 col-sm-10 col-md-8 col-lg-5 col-xxl-6 my-3 px-5'>
          <AboutComponent
                text={info[4].text}
                />
          </div>
          <div className="col-6 col-md-5 col-lg-3 col-xxl-2 my-4 custom-image">
            <img className="img-fluid border rounded" src={'img/nosotrosv.webp'} 
            alt="imagen-oficina-exterior"/>
          </div>
        </div>

        {/* Habilitaciones */}
        <div className="row justify-content-center mt-3 mx-3 mx-sm-5">
          <div className='col-10 col-md-8'>
            <h5 className="rozha-one fs-4">Habilitaciones</h5>
          </div>
        </div>
        <div className="row justify-content-center mb-3 mx-3 mx-sm-5">
          <div className="col-10 col-md-8 d-md-flex border rounded border-5 border-gris">
            <div className='col-10 col-md-6 my-3 mx-auto'>
              <img className="img-fluid" src={'img/anmat.webp'} alt="logo-anmat"/>
            </div>
            <div className='col-10 col-md-6 my-3 mx-auto'>
              <img className="img-fluid" src={'img/ministerio.webp'} alt="logo-ministerio"/>
            </div>
          </div>
            
          </div>
    </div>
  )
}
