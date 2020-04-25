import React, {Component} from "react";
import fire from '../firebase/Fire';

class Main extends Component {

    logout = () => {
      fire.auth().signOut();
    }

    render(){
        return(
        <div>
            <h1>Welcome to Home </h1>
            <h2>Here we could add the info fomr that will go to Azure.</h2>
            <button onClick={this.logout}>LogOut</button>
        </div>
        );
    }
}

export default Main;