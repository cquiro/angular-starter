angular.module(
  'librarium', [
    'ui.router',
    'restangular',
    'pascalprecht.translate'
  ]
);

angular.module('librarium').config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
});
