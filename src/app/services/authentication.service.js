angular.module('librarium')
  .factory('AuthService',
    ['Restangular', 'Session', 'UserPersistence',  function (Restangular, Session, UserPersistence) {
      const authService = {};

      authService.login = function (credentials) {
        return Restangular.all('/users/sign_in')
          .post(credentials)
          .then(function (user) {
            Session.create(user.id, user.name, user.admin,
                           user.authentication_token);
            UserPersistence.setCookieData(JSON.stringify(Session.session));
          });
      };

      authService.logout = function () {
        Session.destroy();
        UserPersistence.clearCookieData();
      };

      return authService;
    }]);
