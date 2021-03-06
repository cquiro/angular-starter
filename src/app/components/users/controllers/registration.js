angular.module('librarium')
  .controller('RegistrationController',
    ['UsersService', '$state', function (usersService, $state) {
      const self = this;
      self.form = {};
      const newUser = { user: self.form };

      self.submitForm = function (isValid) {
        if (isValid) {
          usersService.addUser(newUser).then(function () {
            $state.transitionTo('root', {}, { reload: true });
          }, function (errors) {
            self.message = errors.statusText;
          });
        }
      };
    }]);
