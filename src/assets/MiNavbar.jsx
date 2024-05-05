import { NavLink } from "react-router-dom";
import { NavItem } from "./NavItem";
import { NavDropdown } from "./NavDropdown";

const menuItems=[
  {id:1,title:'HOME',link:"/"},
  {id:2,title:'PRODUCTOS',link:"/",subItems: [
    { id: 21, title: 'Linea 1', link: '/productos/linea1' },
    { id: 22, title: 'Linea 2', link: '/productos/linea2' },
    { id: 23, title: 'Linea 3', link: '/productos/linea3' },
    { id: 24, title: 'Linea 4', link: '/productos/linea4' },
    ]
  },
  {id:3,title:'CONTACTO',link:"/contacto"},
  {id:4,title:'SOBRE NOSOTROS',link:"/nosotros"},
]


export const MiNavbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-sm py-2 bg-light border-bottom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {menuItems.map(i=>(
              <li className="nav-item"
                  key={i.id}>
                    {i.subItems?(
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
