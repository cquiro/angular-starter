angular.module(
  'librarium', [
    'ui.router',
    'restangular',
    'pascalprecht.translate',
    'librarium.directives',
    'ngMessages'
  ]
);

angular.module('librarium').config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
});
