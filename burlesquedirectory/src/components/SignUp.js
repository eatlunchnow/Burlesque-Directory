import React, { useCallback } from "react";
import { withRouter } from "react-router";
import fire from '../firebase/Fire';
import { Link } from 'react-router-dom';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await fire.auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <h3>Welcome to the Burlesque Directory!</h3>
        <p>The burlesque directory is a place to find other burlesque performers and network.</p>
        <p>If you would like to submit your information please enter your e-mail for authentication</p>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
        <Link to="/login"><p>Already have an account? LogIn</p></Link>
      </form>
    </div>
  );
};

export default withRouter(SignUp);