angular.module('librarium')
  .factory('UsersService',
    ['Restangular', 'UserPersistence', function (Restangular, UserPersistence) {
      const urlBase = '/users';
      const usersService = {};

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

      return usersService;
    }]);
