import Products from "./products.json";

const getProducts= () => {
  return Promise.resolve([Products]);;   
}

const getById = (id) => {
    return Promise.resolve([Products.find(product => product.id === id)]);
}

export default { getProducts , getById };