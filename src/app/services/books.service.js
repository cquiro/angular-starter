angular.module('librarium')
  .factory('BooksService',
    ['Restangular', function (Restangular) {
      const urlBase = '/books';
      const booksService = {};

      booksService.getBooks = function (attributes = {}) {
        let searchParams = {};

        attributes.page === undefined ? 1 : attributes.page;

        searchParams = attributes;
        searchParams.per_page = '24';

        return Restangular.all(urlBase).getList(searchParams);
      };

      return booksService;
    }]);
