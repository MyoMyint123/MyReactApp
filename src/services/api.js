
const url = 'http://localhost:3000';

const getUsers = () => fetch(`${url}/users`).then((res) => res.json());
const getUserDetail = (idSlug) => fetch(`${url}/users?id=${idSlug}`).then((res) => res.json());

export {
  getUsers,
  getUserDetail
};
