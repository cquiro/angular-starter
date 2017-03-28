angular.module('librarium')
  .factory('CurrentUserService',
    ['UserPersistence', function (UserPersistence) {
      const currentUserService = {};

      currentUserService.currentUser = function () {
        return JSON.parse(UserPersistence.getUserData());
      };

      currentUserService.userCreds = function () {
        const user = JSON.parse(UserPersistence.getUserData()); 
        return {
          'X-User-Email': user.email,
          'X-User-Token': user.authentication_token
        };
      };

      return currentUserService;
    }]);
