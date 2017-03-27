angular.module('librarium').run(function (PermRoleStore, IdentifyRole) {
  // logged in users
  PermRoleStore.defineRole('USER', function () {
    return IdentifyRole.isUser();
  });

  // logged out users
  PermRoleStore.defineRole('ANONYMOUS', function () {
    return IdentifyRole.isAnonymous();
  });

  // logged in users who are admins
  PermRoleStore.defineRole('ADMIN', function () {
    return IdentifyRole.isAdmin();
  });

  // logged in users who are not admins
  PermRoleStore.defineRole('BASIC', function () {
    return IdentifyRole.isBasic();
  });
});
