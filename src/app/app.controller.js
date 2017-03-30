angular.module('librarium')
  .controller('ApplicationController',
    ['AuthService', '$state', '$translate', '$stateParams', 'UserPersistence',
      function (authService, $state, $translate, $stateParams, UserPersistence) {
        const self = this;
        self.currentPageId = $stateParams.id;

        self.destroySession = function () {
          authService.logout();
          $state.transitionTo('root', {}, { reload: true });
        };

        self.changeLanguage = function (langKey) {
          $translate.use(langKey);
        };

        self.currentUser = UserPersistence.currentUser;
      }]);

