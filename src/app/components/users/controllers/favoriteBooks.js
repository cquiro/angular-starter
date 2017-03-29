angular.module('librarium')
  .controller('FavoriteBooksController',
    ['UsersService', 'Restangular', '$stateParams',
      function (UsersService, Restangular, $stateParams) {
        const self = this;

        self.favBooks = function () {
          UsersService.getFavBooks($stateParams.id).then(function (favBooks) {
            self.favBooksList = favBooks;
          });
        };

        self.favBooks();
      }]);
