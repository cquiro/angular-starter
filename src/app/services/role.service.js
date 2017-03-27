angular.module('librarium').factory('IdentifyRole',
  ['UserPersistence',  function (UserPersistence) {
    const identifyRole = {};

    identifyRole.isUser = function () {
      let result = false;
      const user = UserPersistence.getUserData();

      if (user !== null) {
        result = true;
      }

      return result;
    };

    identifyRole.isAnonymous = function () {
      let result = true;
      const user = UserPersistence.getUserData();

      if (user !== null) {
        result = false;
      }

      return result;
    };

    identifyRole.isAdmin = function () {
      let result = false;
      const user = JSON.parse(UserPersistence.getUserData());

      if (user !== null) {
        result = user.admin;
      }

      return result;
    };

    identifyRole.isBasic = function () {
      let result = false;
      const user = JSON.parse(UserPersistence.getUserData());

      if (user !== null) {
        result = !user.admin;
      }

      return result;
    };

    return identifyRole;
  }]);
