angular.module('librarium')
  .factory('UsersService',
    ['Restangular', 'UserPersistence', 'CurrentUserService',
      function (Restangular, UserPersistence, CurrentUserService) {
        const urlBase = '/users';
        const usersService = {};
        // const userCreds = {
        //   'X-User-Email': CurrentUserService.currentUser().email,
        //   'X-User-Token': CurrentUserService.currentUser().authentication_token
        // };

        usersService.currentUser = CurrentUserService.currentUser();

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
            .customOperation('put', 'update', params, CurrentUserService.userCreds(), element)
            .then(function (user) {
              console.log(user);
              UserPersistence.setUserData(JSON.stringify(user));
            });
        };

        return usersService;
      }]);
