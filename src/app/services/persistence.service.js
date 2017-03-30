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
      },
      currentUser: function () {
        return JSON.parse(localStorage.getItem('userSession'));
      },
      userCreds: function () {
        const user = JSON.parse(localStorage.getItem('userSession'));
        return {
          'X-User-Email': user.email,
          'X-User-Token': user.authentication_token
        };
      }
    };
  });
