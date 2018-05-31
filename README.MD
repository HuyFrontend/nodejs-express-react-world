# run
$ node index.js
# Step 1 Application: Build production
$ npm run build
- note: remove registerServiceWorker(); import registerServiceWorker from ‘register-service-worker’
# Step 2 Server: in index.js
app.use( express.static( `${__dirname}/dist`
