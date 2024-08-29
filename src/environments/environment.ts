export const environment = {
  production: false,

  // auth:{
  //   DOMAIN: 'dev-x7gyakoxxflu4bul.us.auth0.com',
  //   CLIENT_ID: 'lhU7VPQbd9etqfBH0njXrktoUYxO2NXZ',
  //   AUDIENCE:'https://library-api.com'
  // },

  server: {
    HOST: 'http://localhost:8888',
    JWT_TOKEN: 'JWT-Token'
  },
  allowedURLs: [
    '/authors/post',
    '/authors/delete/*',
    '/authors/update/*',
    '/authors/author/*',
    '/books/post',
    '/books/delete/*'
  ],
  authentication: {
    TOKEN_TYPE: 'Bearer ', //NOTE:WARNING! do not remove space after word Bearer.
    TOKEN: 'token',  // //@TODO: rename the token for security reason
    USER: 'user',
    USERS: 'users',
    USER_ROLE: {
      ADMIN: 'admin',
      USER: 'user'
    }
  }
};
