import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavDropdown = ({item}) => {
  return (
    <>
    <div className='nav-item px-md-2 dropdown'>
        <span className="nav-link fw-bolder" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {item.title}
        </span>
        <ul className="dropdown-menu">
            {item.subItems.map(subItem => (
                <li key={subItem.id}>
                    <NavLink to={subItem.link} className="nav-link link-custom ps-2" style={{width: 185}}>{subItem.title}</NavLink>
                </li>
            ))}
        </ul>                    
    </div>
    </>
  )
}
