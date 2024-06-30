import { ComunidadComponent } from "./ComunidadComponent";

const generalItems=[
    {id:1, title: 'Productos Médicos', link:'/productos'},
    {id:2, title: 'Contacto', link:'/contacto'},
    {id:3, title: 'Sobre la empresa', link:'/nosotros'},
    {id:4, title: 'Zonas', link:'/contacto'},
    {id:5, title: 'Habilitaciones', link:'/nosotros'},
    {id:6, title: 'Proveedores', link:'/nosotros'}
];

const lineas1=[
    { id: 21, title: 'Cardiologia', link: '/productos/linea/cardiologia' },
    { id: 22, title: 'Cirugia', link: '/productos/linea/cirugia' },
    { id: 23, title: 'Diabetes', link: '/productos/linea/diabetes' },
    { id: 24, title: 'Gastroenterología', link: '/productos/linea/gastroenterologia' }
];

const lineas2=[
    { id: 25, title: 'Neurología', link: '/productos/linea/neurologia' },
    { id: 26, title: 'Oncología', link: '/productos/linea/oncologia' },
    { id: 27, title: 'Tratamiento de heridas', link: '/productos/linea/heridas' },
    { id: 28, title: 'Urología', link: '/productos/linea/urologia' }
];

export const MiFooter = () => {
  return (
    <>
    <div className="container-fluid">
        <footer className="row px-2 pt-5 mt-5 bg-light border-top align-items-center justify-content-center justify-content-md-between">
            <div className="col-12 mb-3 col-md-5 col-lg-3">
                <a href="/" className="text-dark text-decoration-none d-flex justify-content-center justify-content-md-start">
                    <img src="/img/logo.png" alt="logo"/>
                </a>
            </div>

            <div className="col-4 mb-3 col-md-5 col-lg-2">
                <ul className="nav flex-column">
                    {generalItems.map(subItem => (
                        <li key={subItem.id} className="nav-item mb-2 ms-2">
                            <a href={subItem.link} className="nav-link p-0 text-dark link-custom">{subItem.title}</a>
                        </li>
                    ))}
                </ul> 
            </div>

            <div className="col-4 mb-3 col-md-3 col-lg-2">
                <ul className="nav flex-column">
                    {lineas1.map(subItem => (
                        <li key={subItem.id} className="nav-item mb-2 ms-2">
                            <a href={subItem.link} className="nav-link p-0 text-dark link-custom">{subItem.title}</a>
                        </li>
                    ))}
                </ul>  
            </div>

            <div className="col-4 mb-3 col-md-3 col-lg-2">
                <ul className="nav flex-column">
                    {lineas2.map(subItem => (
                        <li key={subItem.id} className="nav-item mb-2 ms-2">
                            <a href={subItem.link} className="nav-link p-0 text-dark link-custom">{subItem.title}</a>
                        </li>
                    ))}
                </ul>  
            </div>

            <div className="col mb-3 col-md-4 col-lg-2">
            <ComunidadComponent/>
            </div>
        </footer>
    </div>
    
    </>
  )
}
