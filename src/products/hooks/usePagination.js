import { useEffect, useState } from "react";

export const usePagination = (linea, filteredProducts) => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [initialCards, setInitialCards] = useState(6);

  useEffect(() => {
    setCurrentPage(1);
  }, [linea, filteredProducts])
  
  useEffect(()=>{
    
    const handleResize = () =>{
      setInitialCards(getCardsPerPage());
    }
    
    window.addEventListener('resize', handleResize);
    return () =>{
      window.removeEventListener('resize',handleResize);
    };
  },[])

  if(!Array.isArray(filteredProducts) || filteredProducts.length===0){
    return { cardsPerPage:2, currentPage, setCurrentPage, paginatedProducts: [] };
  }

  const cardsPerPage = Math.min(initialCards, filteredProducts.length || 1);
  const lastIndex= currentPage*cardsPerPage;
  const startIndex= lastIndex-cardsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, lastIndex);
  
  return {cardsPerPage, currentPage, setCurrentPage, paginatedProducts};


}

const getCardsPerPage = () => {
  console.log('Window innerWidth:', window.innerWidth);
  if (window.matchMedia('(max-width: 768px)').matches) {
    return 2; 
  } else if (window.matchMedia('(max-width: 1200px)').matches) {
    return 4; 
  } else {
    return 6;
  }
};