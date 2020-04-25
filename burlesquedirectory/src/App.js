import React, {Component} from "react"
import Main from './components/Main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {AuthProvider} from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

class App extends Component {

    render(){
        return(
            <AuthProvider>
            <Router>
                <div>
                <PrivateRoute path="/" exact component={Main}/>
                <Route path="/main" component={SignUp} />
                <Route path="/login" component={LogIn}/>
                </div>
            </Router>
            </AuthProvider>
        );
    }
}
export default App;