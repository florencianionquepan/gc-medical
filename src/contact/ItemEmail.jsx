import { BigIcon } from "./BigIcon"

const iconos=[
  {id:10, icono:'bi bi-whatsapp', text:'291372900',link:'https://wa.me/+542914372900'},
  {id:11, icono:'bi bi-instagram', text:'@GcMedicalbb',link:'https://www.instagram.com/gcmedicalbb'},
  {id:12, icono:'bi bi-instagram', text:'@Gcmedicaldiabetes',link:'https://www.instagram.com/gcmedicaldiabetes'},
  {id:13, icono:'bi bi-linkedin', text:'GC Medical',link:'#'}
];

export const ItemEmail = () => {
  return (
    <>
        <div className="border rounded border-gris border-5 position-relative pt-5 pb-2">
            <BigIcon iconClass="bi bi-envelope-arrow-up" link="mailto:info@gcmedical.com.ar"/>
            <p className="px-4 pt-3 mt-5">
                info@gcmedical.com.ar
            </p>
            <p className="px-4"> Podés encontrarnos en otras redes sociales </p>
            <div className="d-flex justify-content-center pb-3">
              <ul className="list-group pb-3 text-start ms-5">
                {iconos.map(ic=>(
                            <li key={ic.id}
                                className="list-group-item border border-0 pb-0 ms-2">
                                <a href={ic.link} className="btn btn-dark btn-sm rounded-circle ms-1" target="_blank" rel="noopener noreferrer">
                                  <div className="mt-1">
                                      <i className={ic.icono}></i>
                                  </div>
                                </a>
                                <span className="ms-2 rozha-one-lig">
                                  {ic.text}
                                </span> 
                            </li>
                        ))} 
              </ul>
            </div>
            
        </div>
    </>
  )
}
