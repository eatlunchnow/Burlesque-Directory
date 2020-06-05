import React from 'react';
import Hero from "../components/Hero";


function Home(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
           {/* <img styling={{alignItems: "center", justifyContent: "center", display: "flex"}} src={homepic} className="homepic" alt="burlesque singers"/> */}
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