angular.module(
  'librarium', [
    'ui.router',
    'restangular',
    'pascalprecht.translate',
    'permission',
    'permission.ui',
    'librarium.directives',
    'ngMessages',
    'ngCookies',
    'ui.bootstrap'
  ]
);

angular.module('librarium').config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
});
