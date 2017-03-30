angular.module('librarium')
  .controller('UsersShowController',
    ['UsersService', '$stateParams', 'UserPersistence', 'user',
    function (UsersService, $stateParams, UserPersistence, user) {
      const self = this;

      self.user = user;

      self.updateAttribute = function (attribute) {
        UsersService.updateUser(attribute);
      };

      self.ownsProfile = function () {
        return UserPersistence.currentUser().id != $stateParams.id;
      };
    }]);
