
export const PaginationComponent = ({totalCards, cardsPerPage, setCurrentPage, currentPage}) => {
  
  const pages = Array.from({ length: Math.ceil(totalCards / cardsPerPage) }, (_, i) => i + 1);
  //console.log(totalCards,pages);

  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
        {pages.map((page, i) => (
          <li className="page-item" key={i}>
            <button
              className={`page-link link-custom ${page === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
{/*             <li className="page-item"><a className="page-link link-custom" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link link-custom" href="#">1</a></li>
            <li className="page-item"><a className="page-link link-custom" href="#">2</a></li>
            <li className="page-item"><a className="page-link link-custom" href="#">3</a></li>
            <li className="page-item"><a className="page-link link-custom" href="#">Next</a></li> */}
    </nav>
  )
}
