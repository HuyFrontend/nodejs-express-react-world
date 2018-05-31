# Run server
$ node index.js/ server.js

# Step 1 Application: Build production
$ npm run build
- note: remove registerServiceWorker(); import registerServiceWorker from ‘register-service-worker’
- copy all files dist folder and paste it in root of server application `remove bundle.map.js` inside dist
# Step 2 Server: in index.js
app.use( express.static( `${__dirname}/dist`;
app.get('*', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});
app.get('/', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});
app.get('/home', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});
and add to `app.get` all path endpoint of react application
# Step 3 Test in browser with some links
http://localhost:1607/
http://localhost:1607/home
# References
https://medium.freecodecamp.org/i-built-this-now-what-how-to-deploy-a-react-app-on-a-digitalocean-droplet-662de0fe3f48?gi=acaafc57cf45
