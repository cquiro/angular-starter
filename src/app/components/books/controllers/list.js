angular.module('librarium')
  .controller('BookListController',
    ['BooksService', function (BooksService) {
      const self = this;

      self.books = BooksService.getBooks().then(function (books) {
        self.books = books;
      });

      self.booksPage = function (page) {
        BooksService.getBooks(page).then(function (books) {
          self.books = books;
        });
      };

      self.searchBooks = function () {
        BooksService.getBooks(self.attributes).then(function (books) {
          self.books = books;
          self.attributes = {};
        });
      };
    }]);
