import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div id="info">
					Connect Four *Sullivan Edition*
				</div>	
				<Board />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));