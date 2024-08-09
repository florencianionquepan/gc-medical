import { useEffect, useState } from "react";

export const usePagination = (linea, filteredProducts) => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [initialCards, setInitialCards] = useState(6);


  if(!Array.isArray(filteredProducts) || filteredProducts.length===0){
    return { cardsPerPage:2, currentPage, setCurrentPage, paginatedProducts: [] };
  }

  const cardsPerPage = Math.min(initialCards, filteredProducts.length || 1);
  const lastIndex= currentPage*cardsPerPage;
  const startIndex= lastIndex-cardsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, lastIndex);
  
  return {cardsPerPage, currentPage, setCurrentPage, paginatedProducts};


}