import './pagination.css';

export const PaginationComponent = ({totalCards, cardsPerPage, setCurrentPage, currentPage}) => {
  
  const pages = Array.from({ length: Math.ceil(totalCards / cardsPerPage) }, (_, i) => i + 1);
  //console.log(totalCards,pages);

  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
        {pages.map((page, i) => (
          <li className="page-item" key={i}>
            <button
              className={`page-link navi-custom inter ${page === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
