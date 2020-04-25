
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import fire from '../firebase/Fire';
import { AuthContext } from "./Auth.js";

const LogIn = ({ history }) => {

    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await fire.auth().signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
      return <Redirect to="/" />;
    }

      return (
        <div>
            <h3>Welcome back to the Burlesque Directory!</h3>
        <form onSubmit={handleLogin}>
          <label>
            E-mail:
            <input type="text" name="email" placeholder="Email"/>
            </label>
          <label>
            Password:
            <input type="password"  name="password" placeholder="Password"/>
          </label>
          <input type="submit" value="submit" />
        </form>
        </div>
      );
  }
  
  export default withRouter(LogIn);