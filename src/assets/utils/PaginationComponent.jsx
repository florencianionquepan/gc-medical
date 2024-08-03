import './pagination.css';

export const PaginationComponent = ({totalCards, cardsPerPage, setCurrentPage, currentPage}) => {
  
  const totalPages=Math.ceil(totalCards/cardsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  //console.log(totalCards,pages);
  const maxVisiblePages = 3;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(
    Math.min(currentPage - halfMaxVisiblePages, totalPages - maxVisiblePages + 1),
    1
  );
  const endPage = Math.min(
    startPage + maxVisiblePages - 1,
    totalPages
  );

  const visiblePages = pages.slice(startPage - 1, endPage);

  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination pagination-lg">

        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link navi-custom" aria-label="Previous"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}>
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {visiblePages.map((page, i) => (

          <li className="page-item" key={i}>
            <button
              className={`page-link navi-custom inter ${page === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage === pages.length ? 'disabled' : ''}`}>
          <button className="page-link navi-custom" aria-label="Previous"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pages.length}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>


      </ul>
    </nav>
  )
}
