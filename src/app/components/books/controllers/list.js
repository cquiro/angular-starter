angular.module('librarium')
  .controller('BookListController',
    ['BooksService', function (BooksService) {
      const self = this;
      console.log("I'm in booklist controller");

      self.books = BooksService.getBookList().then(function (books) {
        self.books = books;
      });

      self.booksPage = function (page) {
        BooksService.getBookList(page).then(function (books) {
          self.books = books;
        });
      };
    }]);
