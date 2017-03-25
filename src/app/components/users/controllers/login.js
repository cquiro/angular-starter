angular.module('librarium')
  .controller('LoginController',
    ['AuthService', '$state', function (authService, $state) {
      const self = this;
      self.form = {};
      const credentials = { session: self.form };

      self.submitForm = function (isValid) {
        if (isValid) {
          authService.login(credentials).then(function () {
            $state.go('root.books');
          }, function (errors) {
            self.message = errors.statusText;
          });
        }
      };
    }]);
