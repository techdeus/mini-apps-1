// build express server
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
// serve files from client folder

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// server routes
app.get('/', (req, res) =>  {
	// console.log(req.body);
	res.send("Hello World");	
});

app.post('/upload_json', (req, res) => {
	// grab the json data sent in a request
	let jsonData = req.body;
	var values = jsonData.json;
	var jsonParseValues = JSON.parse(values);
	
	console.log(jsonParseValues);
	// convert the data to csv
	let convertedData = convertToCSV(JSON.parse(values));
	
	res.end(convertedData);

});

let convertToCSV = (obj) => {

	let string = '';
	
	// create headers
	let headers = createHeaders(obj);
	// create content

	let line = createContent(obj);
	
	string += headers + '\r\n';
	string += line + '\r\n';
	
	return `<h1>${string}</h1>`;
};

let createHeaders = (obj) => {
	let headers = Object.keys(obj);
	let headerLine = '';
	for (var i = 0; i < headers.length - 1; i++) {
		if (i === 5) {
			headerLine += headers[i];
		} else {
			headerLine += headers[i];
			headerLine += ',';	
		}
	}
	return headerLine;
};

let createContent = (obj) => {
	
	let firstName = obj.firstName;
	let lastName = obj.lastName;
	let county = obj.county;
	let city = obj.city;
	let role = obj.role;
	let sales = obj.sales;

	let line = `${firstName},${lastName},${county},${city},${role},${sales}`;

	return line;
};

// Start & Initialize Web Server: listen on port 3000
const port = 3000;
app.listen(port, () => {
	console.log(`CSV App listening on port ${port}!`);
});