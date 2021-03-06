angular.module('librarium')
  .factory('UsersService',
    ['Restangular', 'UserPersistence', 'CurrentUserService',
      function (Restangular, UserPersistence, CurrentUserService) {
        const urlBase = '/users';
        const usersService = {};

        usersService.currentUser = CurrentUserService.currentUser();

        usersService.addUser = function (newUser) {
          return Restangular.all(urlBase)
            .post(newUser)
            .then(function (user) {
              UserPersistence.setUserData(JSON.stringify(user));
            });
        };

        usersService.getUser = function (userId) {
          return Restangular.one(urlBase, userId).get();
        };

        usersService.updateUser = function (params) {
          const element = { user: params };
          return Restangular.all(urlBase)
            .customOperation('put', 'update', params, CurrentUserService.userCreds(), element)
            .then(function (user) {
              UserPersistence.setUserData(JSON.stringify(user));
            });
        };

        usersService.getFollowing = function (userId) {
          return Restangular.one(urlBase, userId).getList('following', {}, CurrentUserService.userCreds());
        };

        usersService.getFavBooks = function (userId) {
          return Restangular.one(urlBase, userId).getList('favorite_books', {}, CurrentUserService.userCreds());
        };

        usersService.getWishBooks = function (userId) {
          return Restangular.one(urlBase, userId).getList('books_to_read', {}, CurrentUserService.userCreds());
        };

        return usersService;
      }]);
