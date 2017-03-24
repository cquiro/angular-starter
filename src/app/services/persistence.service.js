angular.module('librarium')
  .factory('UserPersistence', ['$cookies', function ($cookies) {
    let userSession = { loggedin: false };

    return {
      setCookieData: function (session) {
        userSession = session;
        $cookies.put('userSession', session);
      },
      getCookieData: function () {
        userSession = $cookies.get('userSession');
        return userSession;
      },
      clearCookieData: function () {
        userSession = {};
        $cookies.remove('userSession');
      }
    };
  }]);
