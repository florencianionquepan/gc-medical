import { useState } from 'react'

export const SearchComponent = ({onSearch}) => {

  const [search, setSearch] = useState("")

  const searcher = (e) => {
    const searchTerm=e.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm);
  }


  return (
    <div className='row m-5 justify-content-center justify-content-md-end'>
        <form className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" 
                    className="form-control" 
                    placeholder="Buscar por nombre o por linea..." 
                    aria-label="Search"
                    value={search}
                    onChange={searcher}/>
        </form>
    </div>
  )
}
