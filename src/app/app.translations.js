angular.module('librarium').config([
  '$translateProvider',
  function ($translateProvider)  {

    $translateProvider.translations('es', {
      WELCOME: 'Bienvenido'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
