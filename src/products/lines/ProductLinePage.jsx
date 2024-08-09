import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductsByLine } from '../helpers/getProductsByLine';
import {ProductCard} from '../ProductCard';
import { TitleLineComponent } from './TitleLineComponent';
import { SearchComponent } from '../../assets/utils/SearchComponent';
import { PaginationComponent } from '../../assets/utils/PaginationComponent';
import { usePagination } from '../hooks/usePagination';
import { useSearch } from '../hooks/useSearch';

export const ProductLinePage = () => {

  const {linea} = useParams();
  //const navigate = useNavigate();

  const [products, setProducts] = useState([]);

    useEffect(() => {
      const products = getProductsByLine(linea);
      setProducts(products);
      //console.log(products);
    }, [linea]);

  const {handleSearch, showSearch, filteredProducts} = useSearch(products);

  const { cardsPerPage, currentPage, setCurrentPage, paginatedProducts} = usePagination(linea, filteredProducts);
 
  return (
    <div className='container-md'>
      <div className='row m-5'>
        <TitleLineComponent title={linea} />
      </div>
      
      { showSearch && 
        <SearchComponent onSearch={handleSearch}/>
      }
        <div className='row m-3 m-xxl-5 justify-content-center justify-content-lg-start'>
            { paginatedProducts.map((pro)=>(
                <div key={pro.id} className="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-4 mb-3">
                    <ProductCard product={pro} imageVisible={true}/>
                </div>
            ))}
        </div>
        <div className='d-flex m-5 justify-content-center justify-content-md-end'>
          <PaginationComponent
            totalCards={filteredProducts.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
    </div>
  )
}
