const {getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: () => {},
  },
];

module.exports = routes;
