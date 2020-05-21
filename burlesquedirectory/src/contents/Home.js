import React, { Component } from 'react';
import homepic from '../img/burlesquesinger.jpg';
import Header from "../components/Header"


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <Header />
            <h1>Welcome to the Burlesque Directory!</h1>
             <img src={homepic} className="homepic" alt="Burlesque Singers"></img> 
            </div>
            )
        }
    }
    
    export default Home