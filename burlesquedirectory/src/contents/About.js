import React from "react"

import Hero from "../components/Hero";
import Content from "../components/Content";


function About(props) {
   
        return (
            <div>
                <Hero title={props.title} />
                <Content>
            <p>The Burlesque Directory is a place for burlesque performers to network and discover new talent. Word of mouth 
                has always been the primary method for performers to find each other but this directory makes it easier 
                to find fellow performers. 
            </p>
            </Content>
            </div>
            )
        }
    


/* class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1>About the Burlesque Directory</h1>
                <p>The Burlesque Directory was created as a place for performers to network and anyone putting on events to 
                    easily find burlesque talent to hire. 
                </p>

            </div>
        )
    }
} */

export default About;