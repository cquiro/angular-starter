angular.module('librarium')
  .controller('TranslationController', function($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  });
