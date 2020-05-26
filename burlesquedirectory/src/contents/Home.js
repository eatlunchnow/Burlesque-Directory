import React from 'react';
//import homepic from '../img/burlesquesinger.jpg';
//import Header from "../components/Header"
import Hero from "../components/Hero";

function Home(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
           
        </div>
    )
}



/* class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                
            <h1>Welcome to the Burlesque Directory!</h1>
             <img src={homepic} className="homepic" alt="Burlesque Singers"></img> 
             <Header />
            </div>
            )
        }
    }
     */
    export default Home