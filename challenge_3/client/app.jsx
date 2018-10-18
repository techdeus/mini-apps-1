

const Step1 = (props) => {
	
	return (
		<div className='form'>
	    	<div className="title"> Enter your Account Information </div> 	
	     	<form>
	     		<div>
		     		<label>
		     			Name:
		     			<input type="text" name="name" onChange={props.handleChangeName}
		     			 />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Email:
		     			<input type="text" name="email" onChange={props.handleChangeEmail}  />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Password:
		     			<input type="password" name="password" onChange={props.handleChangePass}  />
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
		     			<input type="text" onChange={props.handleChangeAddress} />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Additional Address Info: 
		     			<input type="text" onChange={props.handleChangeAddressLine2} />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			City: 
		     			<input type="text" onChange={props.handleChangeCity} />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			State: 
		     			<input type="text" onChange={props.handleChangeState} />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Zip Code: 
		     			<input type="text" onChange={props.handleChangeZipCode} />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Phone Number: 
		     			<input type="text" onChange={props.handleChangePhone} />
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
		     			<input type="text" onChange={props.handleChangeCreditCard} />
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			Expiration Date
		     			<input type="text"  onChange={props.handleChangeExpirationDate}/>
		     		</label>
	     		</div>
	     		<div>
		     		<label>
		     			CVV
		     			<input type="text" onChange={props.handleChangeCVV} />
		     		</label>
		     		</div>
	     		<div>
		     		<label>
		     			Billing Zip Code
		     			<input type="text" onChange={props.handleChangeBillingZipCode} />
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
	    		<div>Address More: {props.currentUser.line2}</div>
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

	toggleView(e, view) {
		e.preventDefault();
		this.setState({
			view: view || 0
		})
	}
	
	handleChangeName(event) {
		this.setState({name: event.target.value});
  	}
  	handleChangeEmail(event) {
  		this.setState({email: event.target.value});
 	}
  	handleChangePass(event) {
  		this.setState({password: event.target.value});
  	}
  	handleChangeAddress(event) {
  		this.setState({line1: event.target.value});
  	}
  	handleChangeAddressLine2(event) {
  		this.setState({line2: event.target.value});
  	}
  	handleChangeCity(event) {
  		this.setState({city: event.target.value});
  	}
  	handleChangeState(event) {
  		this.setState({state: event.target.value});
  	}
  	handleChangeZipCode(event) {
  		this.setState({zipCode: event.target.value});
  	}
  	handleChangePhone(event) {
  		this.setState({phone: event.target.value});
  	}
  	handleChangeCreditCard(event) {
  		this.setState({creditCard: event.target.value});
  	}
  	handleChangeExpirationDate(event) {
  		this.setState({expirationDate: event.target.value});
  	}
  	handleChangeCVV(event) {
  		this.setState({cvv: event.target.value});
  	}
  	handleChangeBillingZipCode(event) {
  		this.setState({billingZipCode: event.target.value});
  	}


	render() {
		return (
			<div> 
				{this.state.view === 0 && <button onClick={(e) => this.toggleView(e, 1)}>
				Checkout
				</button>}

				{this.state.view === 1 && <Step1 handleChangeName={this.handleChangeName.bind(this)} handleChangeEmail={this.handleChangeEmail.bind(this)} handleChangePass={this.handleChangePass.bind(this)} toggleView={this.toggleView.bind(this)} />}
				{this.state.view === 2 && <Step2 handleChangeAddress={this.handleChangeAddress.bind(this)} handleChangeAddressLine2={this.handleChangeAddressLine2.bind(this)} handleChangeCity={this.handleChangeCity.bind(this)} handleChangeState={this.handleChangeState.bind(this)} handleChangeZipCode={this.handleChangeZipCode.bind(this)} handleChangePhone={this.handleChangePhone.bind(this)} toggleView={this.toggleView.bind(this)} />}
				{this.state.view === 3 && <Step3 handleChangeCreditCard={this.handleChangeCreditCard.bind(this)} handleChangeExpirationDate={this.handleChangeExpirationDate.bind(this)} handleChangeCVV={this.handleChangeCVV.bind(this)} handleChangeBillingZipCode={this.handleChangeBillingZipCode.bind(this)} toggleView={this.toggleView.bind(this)} />}
				{this.state.view === 4 && <Summary 
					currentUser={this.state} toggleView={this.toggleView.bind(this)}/>}

			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
