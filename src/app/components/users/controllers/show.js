angular.module('librarium')
  .controller('UsersShowController',
    ['UsersService', '$stateParams', 'UserPersistence',
    function (UsersService, $stateParams, UserPersistence) {
      const self = this;
      self.profileId = $stateParams.id;

      self.userProfile = UsersService.getUser(self.profileId)
        .then(function (user) { self.user = user; });

      self.example = {
        name: 'awesome name'
      };

      self.updateAttribute = function (attribute) {
        UsersService.updateUser(attribute);
      };

      self.ownsProfile = function () {
        return UserPersistence.currentUser().id != $stateParams.id;
      };
    }]);
