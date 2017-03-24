angular.module('librarium')
  .factory('UsersService',
    ['Restangular', 'Session', 'UserPersistence', function (Restangular, Session, UserPersistence) {
      const urlBase = '/users';
      const usersService = {};

      usersService.addUser = function (newUser) {
        return Restangular.all(urlBase)
          .post(newUser)
          .then(function (user) {
            Session.create(user.id, user.name, user.admin,
                           user.authentication_token);
            UserPersistence.setCookieData(JSON.stringify(Session.session));
          });
      };

      return usersService;
    }]);
