angular.module('librarium')
  .factory('UserPersistence', function () {
    let userSession = {};

    return {
      setUserData: function (user) {
        userSession = user;
        localStorage.setItem('userSession', user);
      },
      getUserData: function () {
        userSession = localStorage.getItem('userSession');
        return userSession;
      },
      clearUserData: function () {
        userSession = {};
        localStorage.removeItem('userSession');
      }
    };
  });
