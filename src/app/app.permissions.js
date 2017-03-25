angular.module('librarium').run(function (PermRoleStore, UserPersistence) {
  // logged in users
  PermRoleStore.defineRole('USER', function () {
    let result = false;
    const sessionStr = JSON.stringify(UserPersistence.getUserData());

    if (sessionStr !== undefined) {
      const sessionObj = JSON.parse(sessionStr);
      result = JSON.parse(sessionObj).loggedin;
    } else {
      result = false;
    }

    return result;
  });

  // logged out users
  PermRoleStore.defineRole('ANONYMOUS', function () {
    let result = false;
    const user = UserPersistence.getUserData();

    if (user !== null) {
      result = false;
    } else {
      result = true;
    }

    return result;
  });

  // logged in users who are admins
  PermRoleStore.defineRole('ADMIN', function () {
    let result = false;
    const sessionStr = JSON.stringify(UserPersistence.getUserData());

    if (sessionStr !== undefined) {
      const sessionObj = JSON.parse(sessionStr);
      result = JSON.parse(sessionObj).isAdmin;
    } else {
      result = false;
    }

    return result;
  });

  // logged in users who are not admins
  PermRoleStore.defineRole('BASIC', function () {
    let result = false;
    const sessionStr = JSON.stringify(UserPersistence.getUserData());

    if (sessionStr !== undefined) {
      const sessionObj = JSON.parse(sessionStr);
      result = !JSON.parse(sessionObj).isAdmin;
    } else {
      result = false;
    }

    return result;
  });
});
