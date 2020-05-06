import React, { Component } from "react"
// import firebase from 'firebase';
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
			 	<h1>Please check your email</h1>
				
			</span>
			 :
			<StyledFirebaseAuth
				uiConfig={this.uiConfig}
				firebaseAuth={firebase.auth()}
			/>
			}
			
           
        </div>
    );
    } 
}

export default Form
