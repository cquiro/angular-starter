angular.module('librarium')
  .factory('BooksService',
    ['Restangular', function (Restangular) {
      const urlBase = '/books';
      const booksService = {};

      booksService.getBooks = function (attributes = {}) {
        let searchParams = {};

        if (attributes.page === undefined) { attributes.page = 1; }

        searchParams = attributes;
        searchParams.per_page = '24';

        return Restangular.all(urlBase).getList(searchParams);
      };

      return booksService;
    }]);
