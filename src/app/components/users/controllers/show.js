angular.module('librarium')
  .controller('UsersShowController',
    ['UsersService', '$stateParams', 'CurrentUserService',
    function (UsersService, $stateParams, CurrentUserService) {
      const self = this;
      self.profileId = $stateParams.id;

      self.userProfile = UsersService.getUser(self.profileId)
        .then(function (user) { self.user = user; });

      self.example = {
        name: 'awesome name'
      };

      self.updateAttribute = function (attribute) {
        console.log($stateParams.id);
        UsersService.updateUser(attribute);
      };

      self.ownsProfile = function () {
        return CurrentUserService.currentUser().id != $stateParams.id;
      };
    }]);
