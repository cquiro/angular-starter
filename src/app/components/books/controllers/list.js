angular.module('librarium')
  .controller('BookListController',
    ['BooksService', function (BooksService) {
      const self = this;

      self.books = BooksService.getBookList().then(function (books) {
        self.books = books;
      });

      self.booksPage = function (page) {
        BooksService.getBookList(page).then(function (books) {
          self.books = books;
        });
      };

      self.searchBooks = function () {
        BooksService.getBookSearch(self.attributes).then(function (books) {
          self.books = books;
          self.attributes = {};
        });
      };

      self.calculateStars = function (avgScore) {
        const stars = Math.round(avgScore);
        return stars;
      };
    }]);
