angular.module('librarium')
  .controller('WishBooksController',
    ['UsersService', 'Restangular', '$stateParams',
      function (UsersService, Restangular, $stateParams) {
        const self = this;

        self.wishBooks = function () {
          UsersService.getWishBooks($stateParams.id).then(function (wishBooks) {
            self.wishBooksList = wishBooks;
          });
        };

        self.wishBooks();
      }]);
