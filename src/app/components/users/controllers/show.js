angular.module('librarium')
  .controller('UsersShowController',
    ['UsersService', '$stateParams', function (UsersService, $stateParams) {
      const self = this;
      self.profileId = $stateParams.id;

      self.userProfile = UsersService.getUser(self.profileId)
        .then(function (user) { self.user = user; });
    }]);
