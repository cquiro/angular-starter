angular.module('librarium')
  .service('Session', function () {
    this.loggedin = false;

    this.create = function (userId, userName, isAdmin, authToken) {
      this.loggedin = true;
      this.userId = userId;
      this.userName = userName;
      this.isAdmin = isAdmin;
      this.authToken = authToken;
    };

    this.destroy = function () {
      this.loggedin = false;
      this.userId = null;
      this.userName = null;
      this.isAdmin = null;
      this.authToken = null;
    };
  });
