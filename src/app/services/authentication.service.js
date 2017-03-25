angular.module('librarium')
  .factory('AuthService',
    ['Restangular', 'UserPersistence',  function (Restangular, UserPersistence) {
      const authService = {};

      authService.login = function (credentials) {
        return Restangular.all('/users/sign_in')
          .post(credentials)
          .then(function (user) {
            UserPersistence.setUserData(JSON.stringify(user));
          });
      };

      authService.logout = function () {
        UserPersistence.clearUserData();
      };

      return authService;
    }]);
