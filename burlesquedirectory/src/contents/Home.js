import React, { Component } from 'react';
import homepic from '../img/burlesquesinger.jpg';


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <h1>Welcome to the Burlesque Directory!</h1>
            <img src={homepic} className="homepic"></img>
            </div>
            )
        }
    }
    
    export default Home