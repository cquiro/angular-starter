angular.module('librarium')
  .factory('dataService',
    ['Restangular', 'Session', function (Restangular, Session) {
      const urlBase = '/users';
      const dataService = {};

      dataService.addUser = function (newUser) {
        return Restangular.all(urlBase)
          .post(newUser)
          .then(function (user) {
            Session.create(user.id, user.name, user.admin,
                           user.authentication_token);
            console.log(Session);
          });
      };

      return dataService;
    }]);
