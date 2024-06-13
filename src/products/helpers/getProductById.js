import all from '../data/all';

export const getProductById = (id) => {
  return all.find(product=> product.id == id);
}
