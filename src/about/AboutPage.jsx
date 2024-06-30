import { AboutComponent } from "./AboutComponent"
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
    text:'- Integridad: Asumimos una conducta honesta y coherente.-Compromiso: Nos comprometemos a orientarnos hacia la mejora continua, promovemos la interacción, el esfuerzo y la contribución de todo nuestro personal hacia el logro de nuevos resultados y la satisfacción de nuestros clientes.- Respeto: cuidamos nuestros vínculos con los demás, atendiendo con eficiencia, cortesía y servicio los requerimientos que nos sean solicitados.- Confianza: Construimos relaciones basadas en la consideración personal y profesional, brindando respaldo y seguridad a nuestros clientes.'
  }
]

export const AboutPage = () => {
  return (
    <div className='container-xl'>
        <div className='row justify-content-center m-3'>
          <div className='col-10 col-md-6 col-lg-4 col-xxl-3 my-3'>
            <AboutComponent
                title={info[0].title}
                text={info[0].text}
                />
          </div>
          <div className='col-10 col-md-6 col-lg-4 col-xxl-3 my-3'>
          <AboutComponent
                title={info[1].title}
                text={info[1].text}
                />
          </div>
        </div>
        <div className="row justify-content-center align-items-center m-3">
          <div className="col-10 col-md-6 col-lg-4 col-xxl-3 my-3">
          <AboutComponent
                title={info[2].title}
                text={info[2].text}
                />
          </div>
          <div className="col-8 col-md-4 col-lg-3 col-xxl-3 my-3 bg-gris py-2 rounded custom-shadow">
            <img src={'img/supplier/medtronic.webp'} alt={'Medtronic'} className="img-fluid" />
            <img src={'img/supplier/lexel.webp'} alt={'Medtronic'} className="img-fluid" />
            <img src={'img/supplier/promedon.webp'} alt={'Medtronic'} className="img-fluid" />
          </div>
        </div>

        <div className="row justify-content-center m-3">
          <h5>Habilitaciones</h5>
        </div>
    </div>
  )
}
