angular.module('librarium')
  .controller('LogoutController',
    ['AuthService', '$state', function (authService, $state) {
      const self = this;

      self.destroySession = function () {
        authService.logout();
        $state.go('books');
      };
    }]);

