angular.module(
  'librarium', [
    'ui.router',
    'restangular',
    'pascalprecht.translate',
    'permission',
    'permission.ui',
    'librarium.directives',
    'ngMessages',
    'ui.bootstrap',
    'xeditable'
  ]
);

angular.module('librarium').config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
});
