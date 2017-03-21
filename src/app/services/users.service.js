angular.module('librarium')
  .factory('dataService',
    ['Restangular', function (Restangular) {

    const urlBase = '/users';
    const dataService = {};

    dataService.addUser = function (newUser) {
      return Restangular.all(urlBase).post(newUser);
    };

    return dataService;
  }]);
