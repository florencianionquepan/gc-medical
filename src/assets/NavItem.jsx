import { NavLink } from 'react-router-dom'

export const NavItem = ({item}) => {
  return (
    <>
    <NavLink to={item.link} 
            className={ ({isActive}) => ` text-dark fw-bolder nav-link ${ isActive? 'active':''}`}>
            {item.title}
    </NavLink>
    </>
  )
}
