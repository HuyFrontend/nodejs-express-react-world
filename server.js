var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use( express.static( `${__dirname}/dist` ) );
app.get('/', function (request, response) {
	// response.send('Hello World..!! From Express APP..!!');
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

app.listen(8888, function () {
	console.log('App listening on port 8888');
});