angular.module('librarium')
  .controller('ApplicationController',
    ['AuthService', '$state', function (authService, $state) {
      const self = this;

      self.destroySession = function () {
        authService.logout();
        $state.transitionTo('root', {}, { reload: true });
      };
    }]);

