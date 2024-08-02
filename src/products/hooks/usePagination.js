import { useEffect, useState } from "react";

export const usePagination = (linea, filteredProducts,initialCards = 6) => {
     //pagination
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [linea])
  // const [cardsPerPage, setCardsPerPage]= useState(6);

  if(!Array.isArray(filteredProducts) || filteredProducts.length===0){
    return { cardsPerPage:2, currentPage, setCurrentPage, paginatedProducts: [] };
  }

  const cardsPerPage = Math.min(initialCards, filteredProducts.length || 1);
  const lastIndex= currentPage*cardsPerPage;
  const startIndex= lastIndex-cardsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, lastIndex);
  console.log(cardsPerPage);
  return {cardsPerPage, currentPage, setCurrentPage, paginatedProducts};


}