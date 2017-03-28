angular.module('librarium')
  .controller('UsersShowController',
    ['UsersService', '$stateParams', function (UsersService, $stateParams) {
      const self = this;
      self.profileId = $stateParams.id;

      self.userProfile = UsersService.getUser(self.profileId)
        .then(function (user) {
          self.user = user;
        });

      // self.books = BooksService.getBooks().then(function (books) {
      //   self.books = books;
      // });

      // self.booksPage = function (page) {
      //   BooksService.getBooks(page).then(function (books) {
      //     self.books = books;
      //   });
      // };

      // self.searchBooks = function () {
      //   BooksService.getBooks(self.attributes).then(function (books) {
      //     self.books = books;
      //     self.attributes = {};
      //   });
      // };
    }]);
