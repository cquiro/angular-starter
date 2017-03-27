angular.module('librarium.directives', [])
  .directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        const firstPassword = '#' + attrs.pwCheck;
        $(elem).add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            const v = elem.val() === $(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    };
  }]);
