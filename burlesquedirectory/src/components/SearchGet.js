import React, { useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

function SearchGet() {
    const [city, setCity] = useState("");
    const [pstate, setPstate] = useState("");
    const [result, setResult] = useState([]);
  
    function handleChange(event) {
      const city = event.target.value;
      const pstate = event.target.value;
  
      setCity(city);
      setPstate(pstate);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      axios
        .get(
          `https://kiara-get.azurewebsites.net/api/performers/search?City=${city}&Pstate=${pstate}`
        )
        .then(data => {
          setResult(data.data);
          console.log(data);
        });
    }
  
    return (
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              onChange={handleChange}
              className="form-control mt-10"
              placeholder="Search"
              autocomplete="off"
            />
            <button type="submit">Search</button>
          </div>
        </form>

     
  
        {result.map(result => (
          <>
          <Table bordered responsive>
            <thead>
              <tr>
                <th colSpan="2">Performer Name: </th>
                <th colSpan="2">Email: </th>
                <th colSpan="2">City: </th>
                <th colSpan="2">State: </th>
                <th colSpan="2">Website: </th>
                <th colSpan="2">Facebook: </th>
                <th colSpan="2">Instagram: </th>
                <th colSpan="2">Twitter: </th>
              </tr>
            </thead>
              <tbody>
              <tr>
                <td colSpan="2">{result.PerformerName}</td>
                <td colSpan="2">{result.Email}</td>
                <td colSpan="2">{result.City}</td>
                <td colSpan="2">{result.Pstate}</td>
                <td colSpan="2">{result.Website}</td>
                <td colSpan="2">{result.Facebook}</td>
                <td colSpan="2">{result.Instagram}</td>
                <td colSpan="2">{result.Twitter}</td>
              </tr>
            </tbody>
          </Table>
          {/* <h4>Performer Name:</h4> {result.PerformerName}
          <h4>Performer Email:</h4> {result.Email}
          <h4>Performer City:</h4> {result.City}
          <h4>Performer State:</h4> {result.Pstate}
          <h4>Performer Facebook:</h4> {result.Facebook}
          <h4>Performer Instagram:</h4> {result.Instagram}
          <h4>Performer Twitter:</h4> {result.Twitter}
          <h4>Performer Website:</h4> {result.Website} */}
          </>
        ))}
      </div>
    );
  }


/* class SearchGet extends Component {
    constructor() {
        super()
        this.state = {
          people: []
        }

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };     
        
       }

      

      componentDidMount(){
        fetch("https://kiara-get.azurewebsites.net/api/performers/search", this.requestOptions)
        .then(response => response.json())
        .then(data=> console.log(data))
        .then(data => {
          this.setState({
              people: data
          })
      })
      } 

    
   
    render() {
    
        return (
            <div>
                
                {this.state.people}
            </div>
           
        )
    }
} */

export default SearchGet;
