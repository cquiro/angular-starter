angular.module('librarium')
  .controller('LoginController',
    ['AuthService', '$state', '$scope', function (authService, $state) {
      const self = this;
      self.form = {};
      const credentials = { session: self.form };

      self.submitForm = function (isValid) {
        if (isValid) {
          authService.login(credentials).then(function () {
            $state.go('books');
          }, function (errors) {
            self.message = errors.statusText;
          });
        }
      };
    }]);
