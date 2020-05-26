import React, { Component } from "react";

class SearchGet extends Component {
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
            <div>
                
                {this.state.performers}
            </div>
           
        )
    }
}

export default SearchGet;
