const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'shopping'
});

connection.connect(err => {
	if (err) {
		throw err;
	}
	console.log('Connected to mysql');
});

exports.connection = connection;
