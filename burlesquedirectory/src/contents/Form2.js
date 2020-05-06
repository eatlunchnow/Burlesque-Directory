import React, { Component } from "react"
// import Dropdown from "../components/Dropdown"
import FormErrors from "../components/FormErrors"


class Form2 extends Component {
	constructor (props) {
	  super(props);
	  this.state = {
		email: '',
		burlesqueName: '',
		bcity: '',
		bstate: '',
		formErrors: {email: '', burlesqueName: '', bcity: '', bstate: ''},
		emailValid: false,
		burlesqueNameValid: false,
		bcityValid: false,
		bstateValid: false,
		formValid: false
	  }
	}
  
	handleUserInput = (e) => {
	  const name = e.target.name;
	  const value = e.target.value;
	  this.setState({[name]: value},
					() => { this.validateField(name, value) });
	}
  
	validateField(fieldName, value) {
	  let fieldValidationErrors = this.state.formErrors;
	  let emailValid = this.state.emailValid;
	  let burlesqueNameValid = this.state.burlesqueNameValid;
	  let bcityValid = this.state.bcityValid;
	  let bstateValid = this.state.bstateValid;
  
	  switch(fieldName) {
		case 'email':
		  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		  fieldValidationErrors.email = emailValid ? '' : ' is invalid';
		  break;
		case 'burlesqueName':
		  burlesqueNameValid = value.length >= 0;
		  fieldValidationErrors.password = burlesqueNameValid ? '': ' Please enter your stage name';
		  break;
		case 'bcity':
		  bcityValid = value.length >= 0;
		  fieldValidationErrors.bcity = bcityValid ? '': ' Please enter your city';
		  break;
		case 'bstate':
		  bstateValid = value.length >= 0;
		  fieldValidationErrors.bstate = bstateValid ? '': ' Please enter your state';
		  break;    
		default:
		  break;
	  }
	  this.setState({formErrors: fieldValidationErrors,
					  emailValid: emailValid,
					  burlesqueNameValid: burlesqueNameValid,
					  bcityValid: bcityValid,
					  bstateValid: bstateValid
					}, this.validateForm);
	}
  
	validateForm() {
	  this.setState({formValid: this.state.emailValid && this.state.burlesqueNameValid
	  && this.state.bcityValid && this.state.bstateValid});
	}
  
	errorClass(error) {
	  return(error.length === 0 ? '' : 'has-error');
	}
  
	render () {
	  return (
		  <div className="condiv home">
		<form>
		  <h1>Burlesque Directory Form</h1>
		  <p>Please fill out the form</p>
		  <div>
			<FormErrors formErrors={this.state.formErrors} />
		  </div>
		  <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
			<label htmlFor="email">Email: </label>
			<input type="email" required name="email"
		
			  value={this.state.email}
			  onChange={this.handleUserInput}  />
		  </div>
		  <div className={`form-group ${this.errorClass(this.state.formErrors.burlesqueName)}`}>
			<label htmlFor="burlesqueName">Burlesque Name: </label>
			<input type="burlesqueName" name="burlesqueName"
			  
			  value={this.state.burlesqueName}
			  onChange={this.handleUserInput}  />
		  </div>
		  <div className={`form-group ${this.errorClass(this.state.formErrors.bcity)}`}>
			<label htmlFor="bcity">City: </label>
			<input type="bcity" name="bcity"
			  
			  value={this.state.bcity}
			  onChange={this.handleUserInput}  />
		  </div>
		  <div className={`form-group ${this.errorClass(this.state.formErrors.bstate)}`}>
			<label htmlFor="bstate">State: </label>
			<input type="bstate" name="bstate"
			 
			  value={this.state.bstate}
			  onChange={this.handleUserInput}  />
		  </div>
		  <label htmlFor="Website">Website: </label>
		  <input type="text"></input>
		  <p><label htmlFor="Facebook">Facebook: </label>
		  <input type="text"></input></p>
		  <p><label htmlFor="Instagram">Instagram: </label>
		  <input type="text"></input></p>
		  <label htmlFor="Twitter">Twitter: </label>
		  <input type="text"></input>
		 <p><button type="submit" disabled={!this.state.formValid}>Submit</button></p>
		</form>
		</div>
	  )
	}
  }
  
  export default Form2;
