// build express server
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.use(morgan('dev'));

//serve files from the client folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// server routes
app.get('/', (req, res) => {
	res.send("Hello World");
});

// Start & Initialize Web Server: listen on port 3000
app.listen( (process.env.PORT || 3000), () => {
	console.log(`Multistep Checkout App is listening on port ${process.env.PORT || 3000}!`);
});


// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	// password: '',
// 	// database: 'shopping'
// });

// connection.connect(err => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('Connected to mysql');
// });


