import React from "react"

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <div>  
            <h3>Welcome to the Burlesque Directory!</h3>
            <p>The burlesque directory is a place to find other burlesque performers and network.</p>
            <p>If you would like to submit your information please enter your e-mail for authentication</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            E-mail:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }
  
export default Main