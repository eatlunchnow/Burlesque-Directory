import React, { Component } from "react"
import firebase from '../components/fire';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
			fstate: 'California',
			isSignedIn: false
        };
	}
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
		  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
		  firebase.auth.EmailAuthProvider.PROVIDER_ID
		],
		callbacks: {
		  signInSuccess: () => false
		}
	  }
	
	  componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
		  this.setState({ isSignedIn: !!user })
		  console.log("user", user)
		})
	  }
	
    render() {
    return (
        <div className="condiv">
			<p>To fill in the form please enter your e-mail for verification or sign in using your Google, Facebook
				or Twitter account
			</p>
			{this.state.isSignedIn ? 
			<span>
			 	<h1>Please check your email.</h1>
			</span>
			 :
			<StyledFirebaseAuth
				uiConfig={this.uiConfig}
				firebaseAuth={firebase.auth()}
			/>
			}
			{/*  <h1>Burlesque Performer Form</h1>
            <form>
                <p>Enter your burlesque name:</p>
                <input type="text" />
				<p>Email:</p>
                <input type="text" />
                <p>Choose your state</p>
                <select value={this.state.fstate}>
                <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
                </select>
                <p>Facebook:</p>
                <input type="text" />
                <p>Twitter:</p>
                <input type="text" />
                <p>Instagram:</p>
                <input type="text" />
                
				<p>Website:</p>
                <input type="text" />
            </form>
			<p> <input type="submit" value="Submit" /></p> */}
        </div>
    	);
    } 
}

export default Form;