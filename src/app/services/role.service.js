angular.module('librarium').factory('IdentifyRole',
  ['UserPersistence',  function (UserPersistence) {
    const identifyRole = {};

    identifyRole.isUser = function () {
      let result = false;
      const user = UserPersistence.getUserData();

      if (user !== null) {
        result = true;
      } else {
        result = false;
      }

      return result;
    };

    identifyRole.isAnonymous = function () {
      let result = false;
      const user = UserPersistence.getUserData();

      if (user !== null) {
        result = false;
      } else {
        result = true;
      }

      return result;
    };

    identifyRole.isAdmin = function () {
      let result = false;
      const user = JSON.parse(UserPersistence.getUserData());

      if (user !== null) {
        result = user.admin;
      } else {
        result = false;
      }

      return result;
    };

    identifyRole.isBasic = function () {
      let result = false;
      const user = JSON.parse(UserPersistence.getUserData());

      if (user !== null) {
        result = !user.admin;
      } else {
        result = false;
      }

      return result;
    };

    return identifyRole;
  }]);
