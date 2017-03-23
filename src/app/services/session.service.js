angular.module('librarium')
  .service('Session', function () {
    this.create = function (userId, userName, isAdmin, authToken) {
      this.userId = userId;
      this.userName = userName;
      this.isAdmin = isAdmin;
      this.authToken = authToken;
    };

    this.destroy = function () {
      this.userId = null;
      this.userName = null;
      this.isAdmin = null;
      this.authToken = null;
    };
  });
