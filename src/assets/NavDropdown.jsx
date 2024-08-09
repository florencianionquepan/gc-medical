import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavDropdown = ({item}) => {
  return (
    <>
    <div className='nav-item px-md-2 dropdown'>
        <span className="nav-link text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {item.title}
        </span>
        <ul className="dropdown-menu">
            {item.subItems.map(subItem => (
                <li key={subItem.id}>
                    <NavLink to={subItem.link} end
                    className="nav-link link-custom ps-2 text-dark click-close" 
                    style={{width: 220, fontSize:'larger'}}>
                        {subItem.title}
                    </NavLink>
                </li>
            ))}
        </ul>                    
    </div>
    </>
  )
}
