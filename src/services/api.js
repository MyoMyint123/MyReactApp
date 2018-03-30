
// const url = 'http://localhost:3000';
const url = 'http://localhost:8080/api1';

// const getUsers = () => fetch(`${url}/users`).then((res) => res.json());
// const getUserDetail = (idSlug) => fetch(`${url}/users?id=${idSlug}`).then((res) => res.json());

const getProducts = () => fetch(`${url}/product/read.php`).then((res) => res.json());
const getProductDetail = (idSlug) => fetch(`${url}/products?id=${idSlug}`).then((res) => res.json());

export {
  getProducts,
  getProductDetail
};
