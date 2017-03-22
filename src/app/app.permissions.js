angular.module('librarium').run(function (PermPermissionStore, PermRoleStore) {
  PermPermissionStore.definePermission('loginOrSignup', function () {
    return true;
  });

  PermPermissionStore.definePermission('noLoginOrSignup', function () {
    return false;
  });

  // logged in users
  PermRoleStore.defineRole('USER', ['noLoginOrSignup']);
  // logged out users
  PermRoleStore.defineRole('ANONYMOUS', ['loginOrSignup']);
  // // logged in users who are admins
  PermRoleStore.defineRole('ADMIN', ['noLoginOrSignup']);
  // logged in users who are not admins
  PermRoleStore.defineRole('BASIC', ['noLoginOrSignup']);
});
