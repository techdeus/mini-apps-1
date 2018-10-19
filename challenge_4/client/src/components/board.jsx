import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
	constructor(props) {
		super(props);

		this.players = {
			'-1': 'Black',
			'1': 'Red'
		}
		
		this.state = {
			winner: false,
			turn: 1, 
			board: [
				['', '', '', '', '', '', ''], 
				['', '', '', '', '', '', ''],
				['', '', '', '', '', '', ''],
				['', '', '', '', '', '', ''],
				['', '', '', '', '', '', ''],
				['', '', '', '', '', '', ''],	
			]
		}
	}

	changePiece(rowNum, colNum) {
		let newBoard = this.state.board;
		
		if ( newBoard[rowNum][colNum] === '' ) {
			newBoard[rowNum][colNum] = this.players[this.state.turn];	
			this.setState({board: newBoard});
			this.setState({turn: this.state.turn * -1});
		}
	}

	render() {
		return (

			<div id="game-base">
				<table id="game-table">
					<tbody>
						{this.state.board.map( (row, rowNum) => 
							<tr id={rowNum} key={`row${rowNum}`}>{row.map((col, colNum) =>
								<td id={colNum} key={`row${rowNum} col${colNum}`}
								onClick={this.changePiece.bind(this,rowNum,colNum)}>{col}</td>)}
							</tr>)}
						<tr>
							<td id="bottom-border" bgcolor="blue" rowSpan="2" colSpan="7">
							Play Connect Four
								<div className="turn">{`\n ${this.players[this.state.turn]}\'s Turn`}</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

// export the board
export default Board;