angular.module('librarium')
  .controller('ApplicationController',
    ['AuthService', '$state', '$translate', '$stateParams', 'UsersService', 'CurrentUserService',
      function (authService, $state, $translate, $stateParams, UsersService, CurrentUserService) {
        const self = this;
        self.currentPageId = $stateParams.id;

        self.destroySession = function () {
          authService.logout();
          $state.transitionTo('root', {}, { reload: true });
        };

        self.changeLanguage = function (langKey) {
          $translate.use(langKey);
        };

        self.currentUser = CurrentUserService.currentUser;

        self.userProfile = UsersService.getUser(self.currentPageId)
          .then(function (user) { self.user = user; });
      }]);

