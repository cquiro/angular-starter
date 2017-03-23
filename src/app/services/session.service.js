angular.module('librarium')
  .service('Session',
    function () {
      this.session = {};

      this.create = function (userId, userName, isAdmin, authToken) {
        this.session.loggedin = true;
        this.session.userId = userId;
        this.session.userName = userName;
        this.session.isAdmin = isAdmin;
        this.session.authToken = authToken;
      };

      this.destroy = function () {
        this.session.loggedin = false;
        this.session.userId = null;
        this.session.userName = null;
        this.session.isAdmin = null;
        this.session.authToken = null;
      };
    });
