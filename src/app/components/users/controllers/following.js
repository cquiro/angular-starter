angular.module('librarium')
  .controller('FollowingController',
    ['UsersService', 'Restangular', '$stateParams',
    function (UsersService, Restangular, $stateParams) {
      const self = this;

      self.following = function () {
        UsersService.getFollowing($stateParams.id).then(function (following) {
          self.followingList = following;
        });
      };

      self.following();
    }]);
