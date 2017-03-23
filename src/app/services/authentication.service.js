angular.module('librarium')
  .factory('AuthService',
    ['Restangular', 'Session', function (Restangular, Session) {
      const loginUrl = '/users/sign_in';
      const authService = {};

      authService.login = function (credentials) {
        return Restangular.all(loginUrl)
          .post(credentials)
          .then(function (user) {
            Session.create(user.id, user.name, user.admin,
                           user.authentication_token);
            console.log(Session);
          });
      };

      return authService;
    }]);
