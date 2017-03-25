angular.module('librarium')
  .controller('ApplicationController',
    ['AuthService', '$state', '$translate', function (authService, $state, $translate) {
      const self = this;

      self.destroySession = function () {
        authService.logout();
        $state.go('root.books');
      };

      self.changeLanguage = function (langKey) {
        $translate.use(langKey);
      };
    }]);

