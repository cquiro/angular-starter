angular.module('librarium').run(function (PermRoleStore, Session) {
  // logged in users
  PermRoleStore.defineRole('USER', []);
  // logged out users
  PermRoleStore.defineRole('ANONYMOUS', function () {
    return !Session.loggedin;
  });
  // // logged in users who are admins
  PermRoleStore.defineRole('ADMIN', []);
  // logged in users who are not admins
  PermRoleStore.defineRole('BASIC', []);
});
