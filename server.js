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
app.get('*.js', function (req, res, next) {
	debugger;
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	next();
});
// app.get('/about', function (request, response) {
// 	response.sendFile(__dirname + '/dist/index.html');
// });
// app.get('/contact', function (request, response) {
// 	response.sendFile(__dirname + '/dist/index.html');
// });

app.listen(port, function () {
	const message = `App listening on port ${port}`;
	console.log(`\x1b[32m%s\x1b[0m`, message);
	open(`http://127.0.0.1:${port}`);
});
