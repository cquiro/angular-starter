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
  }])
  .directive('starRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                '<li ng-repeat="star in stars">' +
                '<i class="fa fa-lg"  ng-class="star" aria-hidden="true"></i>' +
                '</li>' +
                '</ul>',
      scope: {
        ratingValue: '='
      },
      link: function (scope) {
        scope.stars = [];
        for (let i = 0; i < 5; i++) {
          scope.stars.push({
            'fa-star': i < scope.ratingValue,
            'fa-star-o': i >= scope.ratingValue
          });
        }
      }
    };
  });
