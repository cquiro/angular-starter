angular.module('librarium').config([
  '$translateProvider',
  function ($translateProvider)  {

    $translateProvider.translations('es', {
      MY_BOOKS: 'Mis Libros',
      REGISTRATION_HEADER: '¡Haz parte de Librarium!',
      NAME: 'Nombre',
      LOGIN_HEADER: 'Inicia sesión en Librarium',
      PASSWORD: 'Contraseña',
      PASSWORD_CONFIRMATION: 'Confirmar contraseña',
      PASSWORD_AGAIN: 'Contraseña (nuevamente)',
      REQUIRED_EMAIL_MSG: 'El email es obligatorio',
      INVALID_EMAIL_MSG: 'Ingresa un email válido',
      REQUIRED_PASSWORD_MSG: 'La contraseña es obligatoria',
      LOG_IN: 'Iniciar sesión',
      SIGN_UP: 'Crear cuenta',
      REQUIRED_NAME_MSG: 'El nombre es obligatorio',
      SHORT_PASSWORD_MSG: 'Esta contraseña es demasiado corta',
      LONG_PASSWORD_MSG: 'Esta contraseña es demasiado larga',
      PASSWORD_NOT_MATCH_MSG: 'Los campos de contraseña y confirmación de contraseña no coinciden',
      LOG_OUT: 'Cerrar sesión',
      OPT_ENG: 'Inglés',
      OPT_SPA: 'Español',
      LANGUAGE: 'Idioma'
    });

    $translateProvider.translations('en', {
      MY_BOOKS: 'My Books',
      REGISTRATION_HEADER: 'Join Librarium!',
      NAME: 'Name',
      LOGIN_HEADER: 'Log in to your librarium account',
      PASSWORD: 'Password',
      PASSWORD_CONFIRMATION: 'Password Confirmation',
      PASSWORD_AGAIN: 'Password (again)',
      REQUIRED_EMAIL_MSG: 'Email is required',
      INVALID_EMAIL_MSG: 'Enter a valid email',
      REQUIRED_PASSWORD_MSG: 'Password is required',
      LOG_IN: 'Log In',
      SIGN_UP: 'Sign Up',
      REQUIRED_NAME_MSG: 'Your name is required',
      SHORT_PASSWORD_MSG: 'This password is too short',
      LONG_PASSWORD_MSG: 'This password is too long',
      PASSWORD_NOT_MATCH_MSG: "Password and password confirmation don't match",
      LOG_OUT: 'Log Out',
      OPT_ENG: 'English',
      OPT_SPA: 'Spanish',
      LANGUAGE: 'Language'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
