

const Step1 = (props) => {
	
	return (
		<div className='form'>
	    	<div className="title"> Enter your Account Information </div> 	
	     	<form>
	     		<div>
		     		<label>
		     			Name:
		     			<input type="text" name="name"
		     			onChange={event => this.updateUserState(event.target.value)} />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Email:
		     			<input type="text" name="email" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Password:
		     			<input type="password" name="password" />
		     		</label>
	     		</div>
	     		<div>
		     		<button onClick={(e) => props.toggleView(e, 2)}>
		     			Next
		     		</button>
	     		</div>
	     	</form>	
	  	</div>
  	)
}

const Step2 = (props) => {
	return (
		<div className='form'>
	    	<div className="title"> Enter your Address Information </div> 	
	     	<form>
	     		<div>
		     		<label>
		     			Address: 
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Address Line 2: 
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			City: 
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			State: 
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Zip Code: 
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Phone Number: 
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<button onClick={(e) => props.toggleView(e, 3)}>
		     		Next
		     		</button>
	     		</div>
	     	</form>	
	  	</div>
  	)
}

const Step3 = (props) => {
	return (
		<div className='form'>
	    	<div className="title"> Enter your Payment Information </div> 	
	     	<form>
	     		<div>
		     		<label>
		     			Credit Card Number
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Expiration Date
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			CVV
		     			<input type="text" />
		     		</label>
		     		</div>
	     		<div>
		     		<label>
		     			Billing Zip Code
		     			<input type="text" />
		     		</label>
	     		</div>
	     		<div>
		     		<button onClick={(e) => props.toggleView(e, 4)}>
		     		Finish
		     		</button>
	     		</div>
	     	</form>	
	  	</div>
  	)
}

const Summary = (props) => {
	return (
		<div className='summary'>
	    	<p>Summary Page</p>
	    	<div>
	    		<div>Name: {props.currentUser.name}</div>
	    		<div>Email: {props.currentUser.email}</div>
	    		<div>Address: {props.currentUser.line1}</div>
	    		<div>Address Line 2: {props.currentUser.line2}</div>
	    		<div>City: {props.currentUser.city}</div>
	    		<div>State: {props.currentUser.state}</div>
	    		<div>Zip Code: {props.currentUser.zipCode}</div>
	    		<div>Phone Number: {props.currentUser.phone}</div>
	    		<div>Credit Card Number: {props.currentUser.creditCard}</div>
	    		<div>Expiration Date: {props.currentUser.expirationDate}</div>
	    		<div>CVV: {props.currentUser.cvv}</div>
	    		<div>Billing Zip Code: {props.currentUser.billingZipCode}</div>
	    	</div>
	    	<div>
	    		<button onClick={(e) => props.toggleView(e, 0)}>
	     			Purchase
     			</button>
     		</div>
     		<div className="summary"></div>	
	  	</div>
  	)
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			view: 0,
			user: {
				name: '',
				email: '',
				password: '',
				line1: '',
				line2: '',
				city: '',
				state: '',
				zipCode: '',
				phone: '',
				creditCard:'',
				expirationDate: '',
				cvv: '',
				billingZipCode: ''
			}
		}
	}

	toggleView(e, view) {
		e.preventDefault();
		this.setState({
			view: view || 0
		})
	}
	
	// updateUserState(name, term) {
	// 	this.setState({
	// 		user.name = term
	// 	})
	// }


	render() {
		return (
			<div> 
				{this.state.view === 0 && <button onClick={(e) => this.toggleView(e, 1)}>
				Checkout
				</button>}

				{this.state.view === 1 && <Step1 updateUserState={this.updateUserState.bind(this)} toggleView={this.toggleView.bind(this)} />}
				{this.state.view === 2 && <Step2 toggleView={this.toggleView.bind(this)} />}
				{this.state.view === 3 && <Step3 toggleView={this.toggleView.bind(this)} />}
				{this.state.view === 4 && <Summary 
					currentUser={this.state.user} toggleView={this.toggleView.bind(this)}/>}

			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
