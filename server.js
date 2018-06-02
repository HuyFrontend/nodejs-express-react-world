const express = require('express');
const bodyParser = require('body-parser');
const open = require('open');
const port = process.env.PORT || 1607;
const app = express();

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use( express.static( `${__dirname}/dist` ) );
app.get('/', function (request, response) {
	// response.send('Hello World..!! From Express APP..!!');
	response.sendFile(__dirname + '/dist/index.html');
});
app.get('*', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});
app.get('/home', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});
app.get('/about', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});
app.get('/contact', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});
app.get('/users', function (request, response) {
	response.json({
	"username" : "JohnDoe",
	"empId" : 1234,
	"dob" : "11-1-1990"
	})
});

app.post('/user', function (request, response) {
	console.log(request.body);
	response.type('application/json');
	response.status(201).send(request.body);
});

app.put('/user/:username', function (request, response) {
	console.log(request.params.username);
	response.type('application/json');
	response.status(200).send(["updated user"]);
});

app.delete('/user/:username', function (request, response) {
	console.log(request.params.username);
	response.status(204).send();
});

app.listen(port, function () {
	const message = `App listening on port ${port}`;
	console.log(`\x1b[32m%s\x1b[0m`, message);
	open(`http://127.0.0.1:${port}`);
});