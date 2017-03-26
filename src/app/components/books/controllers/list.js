angular.module('librarium')
  .controller('BookListController',
    ['$scope', 'Restangular', function ($scope, Restangular) {
      console.log("I'm in booklist controller");
      $scope.books = Restangular.all('books').getList().then(function (books) {
        $scope.books = books;
        console.log($scope.books);
      });
    }]);
