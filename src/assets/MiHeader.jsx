import { MiNavbar } from './MiNavbar';



export const MiHeader = () => {


  return (
  <div className='sticky-top bg-white'>
    <header className="py-3 border-bottom">
      <div className="d-flex flex-wrap justify-content-center">
        <a href="/" className="d-flex align-items-center ms-4 mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          <img src="img/logo.png" alt="logo"/>
        </a>
        <form className="col-10 col-lg-auto mb-3 mb-lg-0 mx-5 me-lg-4 align-self-center" role="search">
          <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search"/>
        </form>
      </div>
    </header>
    <MiNavbar/>
  </div>
  )
}
