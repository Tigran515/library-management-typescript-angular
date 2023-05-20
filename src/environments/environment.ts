
export const environment = {
  production:false,
  auth:{
    DOMAIN: 'dev-x7gyakoxxflu4bul.us.auth0.com',
    CLIENT_ID: 'lhU7VPQbd9etqfBH0njXrktoUYxO2NXZ',
    AUDIENCE:'https://library-api.com'
  },
  server:{
    URL:'http://localhost:8888'
  },
  allowedURLs: [
    '/authors/post',
    '/authors/delete/*',
    '/books/post',
    '/books/delete/*'
  ]
};
