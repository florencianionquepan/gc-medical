import './styles.css';


export const MaintenancePage = () => {
  return (
    <div className="container-md">
        <div id="image-container" className="d-flex justify-content-center align-items-center mt-4">
                <img src="img/maintenance.png" 
                alt="Imagen de sitio en mantenimiento" className="img-fluid"/>
                
        </div>
        
        <div id="info" className="row align-items-center mt-3">
            <p className="mb-0 text-center">Estamos mejorando nuestra web para vos. </p>
            <p className="mb-0 text-center">Podes contactarnos por Instagram y Whatsapp.</p>
            <div className="col d-flex justify-content-center align-items-center m-2">
                <a href="https://www.instagram.com/gcmedicalbb/?igsh=aTNvd2JkdXJ1N3Aw" className="me-2 iconos" target="_blank">
                    <img src="img/instagram.svg" alt="icono-instagram"/>
                </a>
                <a href="https://wa.me/+542914372900" className="me-2 iconos" target="_blank">
                    <img src="img/whatsapp.svg" alt="icono-whatsapp"/>
                </a>
            </div>
        </div>
    </div>
  )
}
