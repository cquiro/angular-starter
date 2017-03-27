angular.module('librarium')
  .factory('BooksService',
    ['Restangular', function (Restangular) {
      const urlBase = '/books';
      const booksService = {};

      booksService.getBookList = function (pageNumber) {
        let page = pageNumber;
        if (page === null) {
          page = 1;
        }

        return Restangular.all(urlBase)
          .getList({ page: page, per_page: 24 });
      };

      return booksService;
    }]);
