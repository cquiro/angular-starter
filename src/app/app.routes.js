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
        .state('root', {
          url: '/',
          views: {
            header: {
              templateUrl: '../app/components/header.html',
              controller: 'ApplicationController as appCtrl'
            },
            'main': {
              templateUrl: '../app/components/books/views/index.html',
              controller: 'BookListController as blistCtrl'
            }
          }
        })
        .state('root.books', {
          url: 'books',
          views: {
            'main@': {
              templateUrl: '../app/components/books/views/index.html',
              controller: 'BookListController as blistCtrl'
            }
          }
        })
        .state('root.new_book', {
          url: 'books/new',
          data: {
            permissions: {
              only: ['ADMIN'],
              redirectTo: 'root.books'
            }
          },
          views: {
            'main@': {
              templateUrl: '../app/components/books/views/new.html'
            }
          }
        })
        .state('root.book', {
          url: 'books/:id',
          views: {
            'main@': {
              templateUrl: '../app/components/books/views/show.html',
              controller: 'TemporaryIdController as ctrlBookId'
            },
            'comments@root.book': {
              templateUrl: '../app/components/comments/index.html'
            },
            'comments_new@root.book': {
              templateUrl: '../app/components/comments/new.html'
            }
          }
        })
        .state('root.edit_book', {
          url: 'books/:id/edit',
          data: {
            permissions: {
              only: ['ADMIN'],
              redirectTo: 'root.books'
            }
          },
          views: {
            'main@': {
              templateUrl: '../app/components/books/views/edit.html'
            }
          }
        })
        .state('root.signup', {
          url: 'signup',
          data: {
            permissions: {
              only: ['ANONYMOUS'],
              redirectTo: 'root.books'
            }
          },
          views: {
            'main@': {
              templateUrl: '../app/components/users/views/registration.html',
              controller: 'RegistrationController as regCtrl'
            }
          }
        })
        .state('root.login', {
          url: 'login',
          data: {
            permissions: {
              only: ['ANONYMOUS'],
              redirectTo: 'root'
            }
          },
          views: {
            'main@': {
              templateUrl: '../app/components/users/views/login.html',
              controller: 'LoginController as linCtrl'
            }
          }
        })
        .state('root.users', {
          url: 'users',
          views: {
            'main@': {
              templateUrl: '../app/components/users/views/index.html'
            }
          }
        })
        .state('root.edit_user', {
          url: 'users/edit',
          data: {
            permissions: {
              only: ['USER'],
              redirectTo: 'root.login'
            }
          },
          views: {
            'main@': {
              templateUrl: '../app/components/users/views/edit.html'
            }
          }
        })
        .state('root.user', {
          url: 'users/:id',
          resolve: {
            user: ['$stateParams', 'UsersService',
              function ($stateParams, UsersService) {
                return UsersService.getUser($stateParams.id);
              }]
          },
          data: {
            permissions: {
              only: ['USER'],
              redirectTo: 'root.login'
            }
          },
          views: {
            'main@': {
              templateUrl: '../app/components/users/views/show.html',
              controller: 'UsersShowController as uShowCtrl'
            },
            'favoriteBooks@root.user': {
              templateUrl: '../app/components/users/views/favorite_books.html',
              controller: 'FavoriteBooksController as fBooksCtrl'
            },
            'wishlist@root.user': {
              templateUrl: '../app/components/users/views/wish_list.html',
              controller: 'WishBooksController as wBooksCtrl'
            },
            'following@root.user': {
              templateUrl: '../app/components/users/views/following.html',
              controller: 'FollowingController as fwingCtrl'
            }
          }
        })
        .state('root.user.favorite_books', {
          url: '/favorite_books',
          templateUrl: '../app/components/users/views/favorite_books.html'
        })
        .state('root.user.wish_list', {
          url: '/wish_list',
          templateUrl: '../app/components/users/views/wish_list.html'
        });

      $locationProvider.html5Mode(true);
    }
  ]);

// Temporary controller to see the param id on books and users show pages.
// It will be removed or replaced as new features are developed.
angular.module('librarium').controller('TemporaryIdController', ['$stateParams', function ($stateParams) {
  this.id = $stateParams.id;
}]);
