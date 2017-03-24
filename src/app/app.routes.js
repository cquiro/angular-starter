angular.module('librarium')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise( ($injector) => {
        $injector.get('$state').go('404');
      });

      $stateProvider
        .state('404', {
          url: '/not-found',
          views: {
            main: {
              templateUrl: '../app/layouts/error/404.html'
            }
          }
        })
        .state('books', {
          url: '/books',
          views: {
            main: {
              templateUrl: '../app/components/books/index.html'
            }
          }
        })
        .state('new_book', {
          url: '/books/new',
          data: {
            permissions: {
              only: ['ADMIN'],
              redirectTo: 'books'
            }
          },
          views: {
            main: {
              templateUrl: '../app/components/books/new.html'
            }
          }
        })
        .state('book', {
          url: '/books/:id',
          views: {
            main: {
              templateUrl: '../app/components/books/show.html',
              controller: 'TemporaryIdController as ctrlBookId'
            },
            'comments@book': {
              templateUrl: '../app/components/comments/index.html'
            },
            'comments_new@book': {
              templateUrl: '../app/components/comments/new.html'
            }
          }
        })
        .state('edit_book', {
          url: '/books/:id/edit',
          data: {
            permissions: {
              only: ['ADMIN'],
              redirectTo: 'books'
            }
          },
          views: {
            main: {
              templateUrl: '../app/components/books/edit.html'
            }
          }
        })
        .state('signup', {
          url: '/signup',
          data: {
            permissions: {
              only: ['ANONYMOUS'],
              redirectTo: 'books'
            }
          },
          views: {
            main: {
              templateUrl: '../app/components/users/views/registration.html',
              controller: 'RegistrationController',
              controllerAs: 'regCtrl'
            }
          }
        })
        .state('login', {
          url: '/login',
          data: {
            permissions: {
              only: ['ANONYMOUS'],
              redirectTo: 'books'
            }
          },
          views: {
            main: {
              templateUrl: '../app/components/users/views/login.html',
              controller: 'LoginController',
              controllerAs: 'linCtrl'
            }
          }
        })
        .state('users', {
          url: '/users',
          views: {
            main: {
              templateUrl: '../app/components/users/index.html'
            }
          }
        })
        .state('edit_user', {
          url: '/users/edit',
          data: {
            permissions: {
              only: ['USER'],
              redirectTo: 'login'
            }
          },
          views: {
            main: {
              templateUrl: '../app/components/users/edit.html'
            }
          }
        })
        .state('user', {
          url: '/users/:id',
          data: {
            permissions: {
              only: ['USER'],
              redirectTo: 'login'
            }
          },
          views: {
            main: {
              templateUrl: '../app/components/users/show.html',
              controller: 'TemporaryIdController as ctrlUserId'
            }
          }
        })
        .state('user.favorite_books', {
          url: '/favorite_books',
          templateUrl: '../app/components/users/favorite_books.html'
        })
        .state('user.wish_list', {
          url: '/wish_list',
          templateUrl: '../app/components/users/wish_list.html'
        });

      $locationProvider.html5Mode(true);
    }
  ]);

// Temporary controller to see the param id on books and users show pages.
// It will be removed or replaced as new features are developed.
angular.module('librarium').controller('TemporaryIdController', ['$stateParams', function ($stateParams) {
  this.id = $stateParams.id;
}]);
