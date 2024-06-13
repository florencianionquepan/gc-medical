
const generalItems=[
    {id:1, title: 'Productos Médicos', link:'#'},
    {id:2, title: 'Contacto', link:'#'},
    {id:3, title: 'Sobre la empresa', link:'#'},
    {id:4, title: 'Zonas', link:'#'},
    {id:5, title: 'Habilitaciones', link:'#'},
    {id:6, title: 'Proveedores', link:'#'}
];

const lineas1=[
    { id: 21, title: 'Cardiologia', link: '/productos/cardiologia' },
    { id: 22, title: 'Cirugia', link: '/productos/cirugia' },
    { id: 23, title: 'Diabetes', link: '/productos/diabetes' },
    { id: 24, title: 'Gastroenterología', link: '/productos/gastroenterologia' }
];

const lineas2=[
    { id: 25, title: 'Neurología', link: '/productos/neurologia' },
    { id: 26, title: 'Oncología', link: '/productos/oncologia' },
    { id: 27, title: 'Tratamiento de heridas', link: '/productos/heridas' },
    { id: 28, title: 'Urología', link: '/productos/urologia' }
];

const iconos=[
    {id:11, icono:'bi bi-instagram', link:'https://www.instagram.com/gcmedicalbb/?igsh=aTNvd2JkdXJ1N3Aw'},
    {id:12, icono:'bi bi-facebook', link:'#'},
    {id:13, icono:'bi bi-linkedin', link:'#'},
    {id:14, icono:'bi bi-whatsapp', link:'https://wa.me/+542914372900'}
];

export const MiFooter = () => {
  return (
    <>
    <div className="container-fluid">
        <footer className="row pt-5 mt-5 border-top align-items-center justify-content-center justify-content-md-between">
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
            <p className="text-center">Sumate a nuestra comunidad!</p>
            <div className="d-flex justify-content-center">
                {iconos.map(icono=>(
                    <a href={icono.link} className="btn btn-dark rounded-circle ms-1">
                        <i className={icono.icono}></i>
                    </a>
                ))}
            </div>
            </div>
        </footer>
    </div>
    
    </>
  )
}
