angular.module('librarium')
  .controller('BookListController',
    ['BooksService', function (BooksService) {
      const self = this;

      self.books = BooksService.getBookList().then(function (books) {
        self.books = books;
      });

      self.getBooks = function (page) {
        if (page === undefined) {
          BooksService.getBookSearch(self.attributes).then(function (books) {
            self.books = books;
            self.attributes = {};
          });
        } else {
          BooksService.getBookList(page).then(function (books) {
            self.books = books;
          });
        }
      };

      self.calculateStars = function (avgScore) {
        const stars = avgScore;
        return stars;
      }; 
    }]);
