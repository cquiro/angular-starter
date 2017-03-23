angular.module('librarium')
  .factory('AuthService',
    ['Restangular', function (Restangular) {
      const urlBase = '/users/sign_in';
      const authService = {};

      authService.login = function (credentials) {
        return Restangular.all(urlBase)
          .post(credentials)
          .then(function (user) {
            console.log(user);
          });
      };

      return authService;
    }]);
