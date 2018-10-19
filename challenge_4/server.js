// build express server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// app is running the express server
const app = express();



// serve static files from the public folder
app.use(express.static(path.join(__dirname, '/client/dist')));
// app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// server routes
app.get('/', (req, res) => {
	res.send();
});


// Start & Initialize the Web Server and Listen on Port 3000
app.listen( (process.env.PORT || 3000), () => {
	console.log(`Multistep Checkout App is listening on port ${process.env.PORT || 3000}!`);
});

