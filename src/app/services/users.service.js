angular.module('librarium')
  .factory('UsersService',
    ['Restangular', 'UserPersistence',
      function (Restangular, UserPersistence) {
        const urlBase = '/users';
        const usersService = {};

        usersService.currentUser = UserPersistence.currentUser();

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
            .doPUT(element, 'update', params, UserPersistence.userCreds())
            .then(function (user) {
              UserPersistence.setUserData(JSON.stringify(user));
            });
        };

        usersService.getFollowing = function (userId) {
          return Restangular.one(urlBase, userId).getList('following', {}, UserPersistence.userCreds());
        };

        usersService.getFavBooks = function (userId) {
          return Restangular.one(urlBase, userId).getList('favorite_books', {}, UserPersistence.userCreds());
        };

        usersService.getWishBooks = function (userId) {
          return Restangular.one(urlBase, userId).getList('books_to_read', {}, UserPersistence.userCreds());
        };

        return usersService;
      }]);
