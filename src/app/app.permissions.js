angular.module('librarium').run(function (PermRoleStore, Session, UserPersistence) {
  // logged in users
  PermRoleStore.defineRole('USER', []);
  // logged out users
  PermRoleStore.defineRole('ANONYMOUS', function () {
    const sessionStr = UserPersistence.getCookieData();
    const sessionObj = JSON.parse(sessionStr);
    return !sessionObj.loggedin;
  });
  // // logged in users who are admins
  PermRoleStore.defineRole('ADMIN', []);
  // logged in users who are not admins
  PermRoleStore.defineRole('BASIC', []);
});
