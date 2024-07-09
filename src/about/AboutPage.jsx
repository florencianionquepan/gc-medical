import { AboutComponent } from "./AboutComponent"
import { ValuesComponent } from "./ValuesComponent";
import {BreakpointIndicator} from "./../assets/utils/BreakpointIndicator"
import './about.css';

const info=[
  {
    id:1,
    title:'Misión',
    text:'Somos una empresa comprometida en alcanzar la completa satisfacción de nuestros clientes cuidando la calidad de nuestros productos y nuestros servicios, para poder así mejorar la calidad de vida de nuestros clientes.'
  },
  {
    id:2,
    title:'Visión',
    text:'Ser una empresa líder en el mercado local de distribución de productos médicos proyectada hacia el futuro, con una tendencia a desarrollarse de acuerdo a las oportunidades de negocios que se presenten.'
  },
  {
    id:3,
    title:'Valores',
    texts:[
      {
        id:31,title:'Confianza',text:`Construimos relaciones basadas en la consideración personal y profesional, 
                                      brindando respaldo y seguridad a nuestros clientes.`
      },
      {
        id:32,title:'Compromiso',text:`Nos comprometemos a orientarnos hacia la mejora continua, promovemos la interacción, 
                                      el esfuerzo y la contribución de todo nuestro personal hacia el logro 
                                      de nuevos resultados y la satisfacción de nuestros clientes.`
      },
      {
        id:33,title:'Respeto',text:`Cuidamos nuestros vínculos con los demás, atendiendo con eficiencia, 
                                      cortesía y servicio los requerimientos que nos sean solicitados`
      },
      {
        id:34, title:'Integridad', text:'Asumimos una conducta honesta y coherente.'
      }],
  },
  {
    id:4,
    title:'Nuestra historia',
    text:`Somos una empresa dedicada a la provisión de prótesis e insumos médicos de mediana y alta complejidad, 
          representante de marcas líderes en las diversas especialidades. En el año 1990 iniciamos Guillermo Consellón productos médicos 
          y en el año 2005 cambiamos nuestra razón social pasando a ser GC medical SRL. 
          Inicialmente comercializamos nuestros productos en la región sur de la provincia de Buenos Aires 
          y en la actualidad nos expandimos con algunas líneas de productos a las provincias de Río Negro y Neuquén`
  },
  {
    id:5,
    title:'Servicios u otro titulo?',
    text:`Para brindar un mejor servicio contamos en nuestros puntos de venta con stock permanente de materiales de urgencia
          y aseguramos una pronta entrega en todos nuestros productos.
          El personal se encuentra altamente capacitado para brindar asistencia y asesoramiento en las diversas áreas (aspectos técnicos administrativos y legales).
          Buscamos brindar soluciones para que la cobertura del producto sea posible.
          Trabajamos para mejorar la calidad de vida de los pacientes.`
  }
]

export const AboutPage = () => {
  return (
    <div className='container-xl'>
      {/* <BreakpointIndicator/> */}
        <div className='row justify-content-center m-3'>
          {/* Mision */}
          <div className='col-10 col-md-8 my-3'>
            <AboutComponent
                title={info[0].title}
                text={info[0].text}
                />
          </div>
          {/* Vision */}
          <div className='col-10 col-md-8 my-3'>
          <AboutComponent
                title={info[1].title}
                text={info[1].text}
                />
          </div>
        </div>
        {/* Valores */}
        <div className="row justify-content-center mt-3">
          <div className="col-10 col-md-8 ms-5 mt-3">
            <h5 className="rozha-one">
              {info[2].title}
            </h5>
            este lo puse asi para que probemos pero lo puedo dejar como antes
          </div>
        </div>
        <div className="row justify-content-center mb-3 mx-5">
            {info[2].texts.map((val)=>(
              <ValuesComponent key={val.id}
                                title={val.title}
                                text={val.text}
              />
            ))}
        </div>
        {/* Nuestra historia */}
        <div className="row justify-content-center align-items-center m-3">
          <div className='col-10 col-md-8 my-3'>
            <AboutComponent
                  title={info[3].title}
                  text={info[3].text}
                  />
          </div>
        </div>
        {/* Servicios */}
        <div className="row justify-content-center align-items-center m-3">
          <div className='col-10 col-md-8 col-lg-5 col-xxl-6 my-3'>
            aca no tenia titulo pero para que quede como los otros cuadritos 
            capaz le podemos poner alguno
          <AboutComponent
                title={info[4].title}
                text={info[4].text}
                />
          </div>
          <div className="col-7 col-md-5 col-lg-3 col-xxl-2 my-3">
            <img className="img-fluid border rounded" src={'img/nosotrosv.webp'} alt="imagen-oficina-exterior"/>
          </div>
        </div>

        {/* Habilitaciones */}
        <div className="row justify-content-center mt-3 mx-5">
          <div className='col-10 col-md-8'>
            <h5 className="rozha-one">Habilitaciones</h5>
          </div>
        </div>
        <div className="row justify-content-center mb-3 mx-5">
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
