import React, { useState } from 'react';

const menuItems=[
  {id:1,title:'HOME',link:"/"},
  {id:2,title:'PRODUCTOS',link:"/",subItems: [
    { id: 21, title: 'Linea 1', link: '/productos/linea1' },
    { id: 22, title: 'Linea 2', link: '/productos/linea2' },
    ]
  },
  {id:3,title:'CONTACTO',link:"/"},
  {id:4,title:'SOBRE NOSOTROS',link:"/"},
]

export const MIHeader = () => {

  const [currentPage, setCurrentPage] = useState('/');

  const handleClick = (link) => {
    setCurrentPage(link);
  };


  return (
  <div className='fixed-top'>
    <header className="py-3 mb-4 border-bottom">
      <div className="d-flex flex-wrap justify-content-center">
        <a href="/" className="d-flex align-items-center ms-4 mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          <img src="./../../public/img/logo.png" alt="logo"/>
        </a>
        <form className="col-10 col-lg-auto mb-3 mb-lg-0 mx-5 me-lg-4 align-self-center" role="search">
          <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search"/>
        </form>
      </div>
    </header>
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
                  <a href={i.link} 
                      className={`nav-link link-dark px-2${i.link === currentPage ? ' active' : ''}`} 
                      onClick={() => handleClick(i.link)}>
                        {i.title}
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
