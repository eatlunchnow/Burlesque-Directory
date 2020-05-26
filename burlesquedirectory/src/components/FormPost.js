import React, { Component } from "react"
// import Dropdown from "../components/Dropdown"
import FormErrors from "../components/FormErrors"

class FormPost extends Component {
	constructor (props) {
	  super(props);
	  this.state = {
		PerformerName: '',
		  Email: '',
		  City: '',
		  Pstate: '',
		  Facebook: '',
		  Instagram: '',
		  Twitter: '',
		  Website: '',
		  show: false,
		  formErrors: {Email: '', PerformerName: '', City: '', Pstate: ''},
		  emailValid: false,
		  burlesqueNameValid: false,
		  bcityValid: false,
		  bstateValid: false,
		  formValid: false,
		  showMe: false
	  }
	}
  
	changeHandler = (e) => {
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
		case 'Email':
		  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		  fieldValidationErrors.email = emailValid ? '' : ' is invalid';
		  break;
		case 'PerformerName':
		  burlesqueNameValid = value.length >= 0;
		  fieldValidationErrors.password = burlesqueNameValid ? '': ' Please enter your stage name';
		  break;
		case 'City':
		  bcityValid = value.length >= 0;
		  fieldValidationErrors.bcity = bcityValid ? '': ' Please enter your city';
		  break;
		case 'Pstate':
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

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state)
		fetch("https://jose-post.azurewebsites.net/api/postRequest", { 
		  method: 'POST',
		  body: JSON.stringify({ 
			PerformerName:this.state.PerformerName,
			Email:this.state.Email,
			City:this.state.City,
			Pstate:this.state.Pstate,
			Facebook:this.state.Facebook,
			Instagram:this.state.Instagram,
			Twitter:this.state.Twitter,
			Website:this.state.Website
		  }),
		  headers:{ 
			"Content-type": "application/json; charset=UTF-8",
			'Access-Control-Allow-Origin': '*'
			}
		})
		.then(res => res.json())
		.then(response => console.log('Success:', response))
		.catch(error => console.error('Error:', error));
	  }

	changesSave(){
		alert("Do you want to continue and save your information?")
		this.setState({
			show: true
		});
	}
  
	render () {
	  return (
		  <div className="condiv home">
		<form onSubmit={this.handleSubmit}>
		{
			this.state.show?
			<div id="flashMessage">
			Your records have been saved successfully.
			</div>
			:null
		}
		<h1>Burlesque Directory Form</h1>
		<p>Please fill out the form</p>
		<div>
			<FormErrors formErrors={this.state.formErrors} />
		</div>
		<div className={`form-group ${this.errorClass(this.state.formErrors.PerformerName)}`}>
			<label htmlFor="PerformerName">Burlesque Name: </label>
			<input type="text" required name="PerformerName"
			  value={this.state.PerformerName}
			  onChange={this.changeHandler}  />
		</div>

		<div className={`form-group ${this.errorClass(this.state.formErrors.Email)}`}>
			<label htmlFor="Email"> Email: </label>
			<input type="Email" required name="Email"  
			  value={this.state.Email}
			  onChange={this.changeHandler}  />
		</div>

		  <div className={`form-group ${this.errorClass(this.state.formErrors.City)}`}>
			<label htmlFor="City">City: </label>
			<input type="City" name="City"
			  value={this.state.City}
			  onChange={this.changeHandler}  />
		</div>

		<div className={`form-group ${this.errorClass(this.state.formErrors.Pstate)}`}>
			<label htmlFor="Pstate">State (please enter full state name, no abbreviations): </label>
			<input type="Pstate" name="Pstate"
			  value={this.state.Pstate}
			  onChange={this.changeHandler}  />
		</div>

		<p><label htmlFor="Facebook">Facebook: </label>
			<input type="text" name="Facebook"
			value={this.state.Facebook}
			onChange={this.changeHandler}></input></p>

		<p><label htmlFor="Instagram">Instagram: </label>
			<input type="text" name="Instagram"
			value={this.state.Instagram}
			onChange={this.changeHandler}></input></p>

		<p><label htmlFor="Twitter">Twitter: </label>
				<input type="text" name="Twitter"
				value={this.state.Twitter} 
				onChange={this.changeHandler}></input></p>

		<p><label htmlFor="Website">Website: </label>
			<input type="text" name="Website" 
			value={this.state.Website}
			onChange={this.changeHandler}></input></p>

		 <p><button type="submit" onClick={()=> this.changesSave()} disabled={!this.state.formValid}>Submit</button></p>
		</form>
		</div>
	  )
	}
  }
  
  export default FormPost;
