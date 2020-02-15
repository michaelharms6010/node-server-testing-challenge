```https://quotes-db-mike.herokuapp.com   
RESTRICTED Endpoints (requires token):
      GET: /quotes/
      POST: /quotes/
      PUT: /quotes/:id
      DELETE: /quotes/:id
AUTH Endpoints Both these endpoints will return a token:
      POST: /auth/register - expects {username: "username", password: "password"}
      POST: /auth/login - expects {username: "username", password: "password"}
      Both return a token that will allow a user to access the quote endpoint```
