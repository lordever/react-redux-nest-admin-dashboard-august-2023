Greeting. For using this template need to make next steps:
1. Go to client and server folders and make *npm i*
2. From client and server folder make *npm run start*. It runs client server on http:/localhost:3000. Server will be started on http://localhost:3001. From client side was configured proxy on /api and each request will be redirected on server path (check webpack.config.js)
3. Run postman and make the update by next query:
```
curl --location --request POST 'http://localhost:3001/api/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test 2",
    "description": "Description 2"
}'
```

Using technologies:
1. **Client:** 
   1. React
   2. Typescript
   3. Webpack
   4. Less
   5. i18n
   6. axios
2. **Backend:** Nest.js