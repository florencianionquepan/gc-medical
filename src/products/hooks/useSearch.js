import { useMemo, useState } from "react";

export const useSearch = (products) => {
    const [search, setSearch] = useState("");

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  //al inicio, search es una cadena vacia. todos cumplen esa condicion
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) || 
        product.provider.toLowerCase().includes(search.toLowerCase())
      ); 
  }, [products, search]); 

  const showSearch = (products.length>3);

  return {handleSearch, showSearch, filteredProducts};
}