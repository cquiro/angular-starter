angular.module('librarium')
  .controller('RegistrationController',
    ['dataService', '$state', function (dataService, $state) {
      const self = this;
      self.form = {};
      const newUser = { user: self.form };

      self.submitForm = function (isValid) {
        if (isValid) {
          dataService.addUser(newUser).then(function (user) {
            console.log(user);
            $state.go('books');
          }, function (errors) {
            self.message = errors.statusText;
          });
        }
      };
    }]);
