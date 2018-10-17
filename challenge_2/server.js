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
	
	// convert the data to csv
	let convertedData = convertToCSV(JSON.parse(values));
	
	
res.send(
`<!DOCTYPE html>	
<html>
	<head>
		<meta content="text/html" charset="utf-8">
		<link rel="stylesheet" type="text/css" href="styles.css" />
		<title> CSV Report Generator by MS </title>
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	</head>
	<body>
		<div class="container">

			<div><h2> CSV Report Generator </h2></div>
			<div>
				<form id="form" method="POST" action="/upload_json">
				<div>
					<textarea name="json" rows="30" cols="60" placeholder="Place your JSON data here" required="required"></textarea>	
				</div>
				<div>
				<input type="submit" value="Submit">
				</div>
				</form>
			</div>	
			<div id="csvreport"><pre>${convertedData}</pre></div>
		</div>	
	<script src="app.js"></script>
	</body>	
</html>
`
);

});

let convertToCSV = (obj) => {

	let string = '';
	
	// create headers
	let headers = createHeaders(obj);
	string += headers + '\r\n';
	
	// create content
	let firstContent = createContent(obj);
	string += firstContent + '\r\n';
	
	let helper = (obj) => {
		for (var key in obj) {
			if (key === 'children') {
				for (var i = 0; i < obj[key].length; i++) {
					let line = createContent(obj[key][i]);
					string += line + '\r\n';
					helper(obj[key][i]);
				}	
			}
		}
	};

	helper(obj);
	return `${string}`;
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