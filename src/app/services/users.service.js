angular.module('librarium')
  .factory('UsersService',
    ['Restangular', 'UserPersistence', function (Restangular, UserPersistence) {
      const urlBase = '/users';
      const usersService = {};
      const currentUser = JSON.parse(UserPersistence.getUserData());
      const userCreds = {
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token
      };

      usersService.currentUser = currentUser;

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
        console.log(params);
        return Restangular.all(urlBase)
          .customOperation('put', 'update', params, userCreds, element)
          .then(function (user) {
            console.log(user);
            UserPersistence.setUserData(JSON.stringify(user));
          });
      };

      return usersService;
    }]);
