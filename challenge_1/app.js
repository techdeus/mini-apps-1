
let flag = 1;
let pieces = {
	X: false,
	O: false
}
let gameOver = false;

var elements = document.querySelectorAll("td");
var turn = document.getElementById('gameMessage');

// add event Listener to each element
elements.forEach( (node) => {
	node.addEventListener('click', function() {
		if ( node.innerHTML === ' ' && flag === 1 && !gameOver ) {
			node.innerHTML = 'X';
			gameMessage.innerHTML = 'O\'' + 's Turn';
			flag = 0;
			checkWinner();
		} else if (node.innerHTML === ' ' && !gameOver) {
			node.innerHTML = 'O';
			gameMessage.innerHTML = 'X\'' + 's Turn';
			flag = 1;
			checkWinner();
		}
	});
});

let clearGame = () => {
	var table = document.getElementById('board');
	for ( var i = 0, row; row = table.rows[i]; i++ ) {
		for ( var j = 0, col; col = row.cells[j]; j++ ) {
			col.innerHTML = ' ';
		}
	}
	flag = 1;
	pieces.X = false;
	pieces.O = false;
	gameOver = false;
	gameMessage.innerHTML = 'Start a new game: X\'' + 's Turn';
}

let checkAllRows = () => {
	var rows = document.getElementById("board").getElementsByTagName("tr");
	// console.log(rows);
	for (var i = 0; i < rows.length; i++) {
		if ( checkRow(rows[i].children) ) {
			if (pieces.X) {
				gameMessage.innerHTML = "X Wins";
				gameOver = true;
			} else {
				gameMessage.innerHTML = "O Wins";
				gameOver = true;
			}
		}
	};
} 

let checkRow = (row) => {
	var x = 0;
	var o = 0;
	// loop through rows
	for (var i = 0; i < row.length; i++) {
		if(row[i].innerHTML === 'X') {
			x++;
		} else if (row[i].innerHTML === 'O') {
			o++;
		}
	}
	if (x === 3) { 
		pieces.X = true;
		return true; 
	} else if (o === 3) {
		pieces.O = true;
		return true;
	} else {
		return false;
	}
}

let checkAllColumns = () => {
	var columns = document.getElementById("board").getElementsByTagName("td");
	var array = [];
	
	for (var i = 0; i < columns.length; i++) {
		array.push(columns[i].innerHTML.charCodeAt());
	}
	if (array[0] + array[3] + array[6] === 264 || 
		array[1] + array[4] + array[7] === 264 || 
		array[2] + array[5] + array[8] === 264) {
			pieces.X = true;
			gameMessage.innerHTML = "X Wins";
			gameOver = true;
			
	} else if (array[0] + array[3] + array[6] === 237 || 
		array[1] + array[4] + array[7] === 237 || 
		array[2] + array[5] + array[8] === 237) {
			pieces.O = true;
			gameMessage.innerHTML = "O Wins"
			gameOver = true;
	}
}

let checkAllDiagonals = () => {
	var columns = document.getElementById("board").getElementsByTagName("td");
	var array = [];

	for (var i = 0; i < columns.length; i++) {
		array.push(columns[i].innerHTML.charCodeAt());
	}

	if (array[0] + array[4] + array[8] === 264 || 
		array[2] + array[4] + array[6] === 264) {
		pieces.X = true;
		gameMessage.innerHTML = "X Wins";
		gameOver = true;
	} else if (array[0] + array[4] + array[8] === 237 || 
		array[2] + array[4] + array[6] === 237) {
		pieces.O = true;
		gameMessage.innerHTML = "O Wins";
		gameOver = true;
	}
}

let checkWinner = () => {
	checkAllRows();
	checkAllColumns();
	checkAllDiagonals();
}


