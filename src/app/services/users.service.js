angular.module('librarium')
  .factory('UsersService',
    ['Restangular', function (Restangular) {
      const urlBase = '/users';
      const usersService = {};

      usersService.addUser = function (newUser) {
        return Restangular.all(urlBase).post(newUser);
      };

      return usersService;
    }]);
