import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import SearchGet from "../components/SearchGet";
//import axios from "axios"


function Search(props) {
   
	return (
		<div>
			<Hero title={props.title} />
			<Content>
        <p style={{textAlign:"center"}}>Search for performers by city or state</p>
		<SearchGet />
		</Content>
		</div>
		)
	}

export default Search;




/* class Search extends Component {
    constructor() {
        super()
        this.state = {
          getPerformers: [{
            performers: ""
          }] 
        }
       }

      componentDidMount(){
        fetch("https://kiara-get.azurewebsites.net/api/getPerformers?code=KMBvmgP/3ut3MD6nBLUQxFVPiREPBOX1nFlR0cfjqkSBWFTCc/x9hw==")
        .then(response => response.json())
        .then(data=> console.log(data))
        .then(data => {
          this.setState({
              getPerformers: data
          })
      })
      } 

    
   
    render() {
    
        return (
            <div className="condiv">
                <h1>Burlesque Directory Search</h1>
                <p>Search for burlesque performers in your area and beyond. Please type a city or state to search.</p>
                {this.state.performers}
            </div>
           
        )
    }
} */


 /*  <Autocomplete
        suggestions={[
          "Washington",
          "Oregon",
          "California",
          "Seattle",
          "Portland",
          "Los Angeles",
          "Chicago",
          "Illinois"
        ]} */