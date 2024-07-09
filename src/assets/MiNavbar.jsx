import { NavItem } from "./NavItem";
import { NavDropdown } from "./NavDropdown";

const menuItems=[
  {id:1,title:'INICIO',link:"/"},
  {id:2,title:'PRODUCTOS',link:"/",subItems: [
    { id: 20, name:'all', title: 'Ver todo', link: '/productos' },
    { id: 21, name:'heridas', title: 'Tratamiento de heridas', link: '/productos/linea/heridas' },
    { id: 22, name:'oncologia', title: 'Oncología', link: '/productos/linea/oncologia' },
    { id: 23, name:'urologia', title: 'Urología', link: '/productos/linea/urologia' },
    { id: 24, name:'diabetes', title: 'Diabetes', link: '/productos/linea/diabetes' },
    { id: 25, name:'neurologia', title: 'Neurología', link: '/productos/linea/neurologia' },
    { id: 26, name:'cardiologia', title: 'Cardiologia', link: '/productos/linea/cardiologia' },
    { id: 28, name:'gastroenterologia', title: 'Gastroenterología', link: '/productos/linea/gastroenterologia' },
    { id: 29, name:'cirugia', title: 'Cirugia General', link: '/productos/linea/cirugia' },
    ]
  },
  {id:3,title:'CONTACTO',link:"/contacto"},
  {id:4,title:'SOBRE NOSOTROS',link:"/nosotros"},
]


export const MiNavbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-md py-2 bg-light border-bottom sticky-top'">
      <div className="container-fluid">
        <a href="/" className="d-flex align-items-center ms-4 mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          <img src="/img/logo.png" alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end me-md-5 rozha-one fw-light fs-5" id="navbarNav">
          <ul className="navbar-nav">
            {menuItems.map(i=>(
              <li className="nav-item"
                  key={i.id}>
                    {i.subItems?(
                      //el de productos
                      <NavDropdown item={i}/>
                    ):(
                      <NavItem item={i}/>
                    )}
                </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
