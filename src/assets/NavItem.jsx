import { NavLink } from 'react-router-dom'

export const NavItem = ({item}) => {
  return (
    <>
    <NavLink to={item.link} 
            className={ ({isActive}) => `nav-link ${ isActive? 'active':''}`}>
            {item.title}
    </NavLink>
    </>
  )
}
