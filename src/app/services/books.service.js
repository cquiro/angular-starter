angular.module('librarium')
  .factory('BooksService',
    ['Restangular', function (Restangular) {
      const urlBase = '/books';
      const booksService = {};

      booksService.getBookList = function (pageNumber) {
        let page = pageNumber;
        page === null ? 1 : pageNumber

        return Restangular.all(urlBase)
          .getList({ page: page, per_page: 24 });
      };

      booksService.getBookSearch = function (attributes) {
        let searchParams = {};

        if (attributes !== undefined) {
          searchParams = attributes;
        }

        searchParams.page = '1';
        searchParams.per_page = '24';

        return Restangular.all(urlBase)
          .getList(searchParams);
      };

      return booksService;
    }]);
