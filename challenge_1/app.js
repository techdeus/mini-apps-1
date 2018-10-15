console.log('Checking connection');
var winMessage = 'wins!';
var flag = 1;
// on click of a square add a X or O

let clearGame = () => {
	var table = document.getElementById('board');
	for ( var i = 0, row; row = table.rows[i]; i++ ) {
		for ( var j = 0, col; col = row.cells[j]; j++ ) {
			col.innerHTML = '';
		}
	}
	flag = 1;
}

document.getElementById('one').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('one').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('one').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('two').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('two').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('two').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('three').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('three').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('three').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('four').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('four').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('four').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('five').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('five').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('five').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('six').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('six').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('six').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('seven').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('seven').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('seven').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('eight').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('eight').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('eight').innerHTML = 'O';
			flag = 1;
		}
});
document.getElementById('nine').addEventListener('click', function() {
		if (flag === 1) {
			document.getElementById('nine').innerHTML = 'X';
			flag = 0;
		} else {
			document.getElementById('nine').innerHTML = 'O';
			flag = 1;
		}
});