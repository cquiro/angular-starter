angular.module('librarium')
  .controller('BookListController',
    ['$scope', 'BooksService', function ($scope, BooksService) {
      console.log("I'm in booklist controller");
      $scope.books = BooksService.getBookList().then(function (books) {
        $scope.books = books;
      });

      $scope.booksPage = function (page) {
        BooksService.getBookList(page).then(function (books) {
          $scope.books = books;
        });
      };
    }]);
