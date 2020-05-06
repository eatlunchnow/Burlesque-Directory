import React, { Component } from "react"
import Autocomplete from "../components/Autocomplete"


class Search extends Component {
    render() {
        return (
            <div className="condiv">
                <h1>Burlesque Directory Search</h1>
                <p>Search for burlesque performers in your area and beyond. Please type a city or state to search.</p>
                <Autocomplete
        suggestions={[
          "Washington",
          "Oregon",
          "California",
          "Seattle",
          "Portland",
          "Los Angeles",
          "Chicago",
          "Illinois"
        ]}
        
      />
         <p> <input type="submit" value="Submit" /></p> 
            </div>
        )
    }
}

export default Search