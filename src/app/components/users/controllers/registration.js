angular.module('librarium')
  .controller('RegistrationController', ['Restangular', '$state', function (Restangular, $state) {
    const self = this;

    self.form = {};

    const newUser = { user: self.form };

    self.submitForm = function (isValid) {
      if (isValid) {
        Restangular.all('users').post(newUser).then(function (user) {
          console.log(user);
          $state.go('books');
        }, function (errors) {
          self.message = errors.statusText;
        });
      }
    };

    // self.submitForm = function () {
    //   $http({
    //     method: 'POST',
    //     url: 'http://localhost:3000/users',
    //     data: { user: self.form },
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //   })
    //     .success(function (data) {
    //       console.log(data);

    //       if (!data.success) {
    //         this.errorName = data.errors.name;
    //         this.errorEmail = data.errors.email;
    //         this.errorPassword = data.errors.password;
    //         this.errorPasswordConfirmation = data.errors.passwordConfirmation;
    //       } else {
    //         this.message = data.message;
    //       }
    //     });
    // };
  }]);
