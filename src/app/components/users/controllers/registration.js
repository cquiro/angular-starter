angular.module('librarium')
  .controller('RegistrationController', ['Restangular', function (Restangular) {
    // const self = this;

    // self.form = {};

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
