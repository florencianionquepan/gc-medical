import { AboutComponent } from "./AboutComponent"
import { ValuesComponent } from "./ValuesComponent";
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
        id:31,title:'Confianza',text:'Construimos relaciones basadas en la consideración personal y profesional, brindando respaldo y seguridad a nuestros clientes.'
      },
      {
        id:32,title:'Compromiso',text:`Nos comprometemos a orientarnos hacia la mejora continua, promovemos la interacción, 
                                      el esfuerzo y la contribución de todo nuestro personal hacia el logro 
                                      de nuevos resultados y la satisfacción de nuestros clientes.`
      },
      {
        id:33,title:'Respeto',text:'Cuidamos nuestros vínculos con los demás, atendiendo con eficiencia, cortesía y servicio los requerimientos que nos sean solicitados'
      },
      {
        id:34, title:'Integridad', text:'Asumimos una conducta honesta y coherente.'
      }],
  },
  {
    id:4,
    title:'Nuestra historia',
    text:'Somos una empresa dedicada a la provisión de prótesis E insumos médicos de mediana Y alta complejidad representante de marcas líderes en las diversas especialidades en el año 1990 iniciamos Guillermo consellón productos médicos Y en el año 2005 cambiamos nuestra razón social pasando a ser GC medical SRL Inicialmente comercializamos nuestros productos en la región sur de la provincia de Buenos Aires en la actualidad nos expandimos con algunas líneas de productos a las provincias de Río Negro Y Neuquén'
  },
  {
    id:5,
    title:'',
    text:`Para brindar un mejor servicio
          Contamos en nuestros puntos de venta con stock permanente de materiales de urgencia
          aseguramos una pronta entrega en todos nuestros productos
          El personal se encuentra altamente capacitado para brindar asistencia Y asesoramiento en las diversas áreas ( Aspectos técnicos administrativos Y legales
          buscamos brindar soluciones para que la cobertura del producto sea posible
          Buscamos brindar soluciones para que la cobertura del producto sea posible
          Trabajamos para mejorar la calidad de vida de los pacientes`
  }
]

export const AboutPage = () => {
  return (
    <div className='container-xl'>
        <div className='row justify-content-center m-3'>
          <div className='col-10 col-md-7 my-3'>
            <AboutComponent
                title={info[0].title}
                text={info[0].text}
                />
          </div>
          <div className='col-10 col-md-7 my-3'>
          <AboutComponent
                title={info[1].title}
                text={info[1].text}
                />
          </div>
        </div>
        {/* <div className="row justify-content-center align-items-center m-3">
          <div className="col-10 col-md-6 col-lg-4 col-xxl-3 my-3">
          
          </div>
          <div className="col-8 col-md-4 col-lg-3 col-xxl-3 my-3 bg-gris py-2 rounded custom-shadow">
            <img src={'img/supplier/medtronic.webp'} alt={'Medtronic'} className="img-fluid" />
            <img src={'img/supplier/lexel.webp'} alt={'Medtronic'} className="img-fluid" />
            <img src={'img/supplier/promedon.webp'} alt={'Medtronic'} className="img-fluid" />
          </div>
        </div> */}
        <div className="row justify-content-center m-3 border-gris border border-1">
          <div className="col-10 mx-5 mt-3">
            Ver donde irian los bordes para ajustar el responsive-
            Luego le puedo agregar alguna animacion
            <h5 className="rozha-one">
              {info[2].title}
            </h5>
          </div>
            {info[2].texts.map((val)=>(
              <ValuesComponent key={val.id}
                                title={val.title}
                                text={val.text}
              />
            ))}
        </div>
        <div className="row justify-content-center m-3">
        <div className='col-10 col-md-7 my-3'>
          <AboutComponent
                title={info[3].title}
                text={info[3].text}
                />
          </div>
        </div>

        <div className="row justify-content-center m-3">
          <h5 className="rozha-one">Habilitaciones</h5>
        </div>
    </div>
  )
}
