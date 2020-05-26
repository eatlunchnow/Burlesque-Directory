import React from 'react';
import './styles.scss';
import './App.css';
//import './styles.css';
import {
  BrowserRouter as Router,
  Route, Link
} from "react-router-dom";
import Container from "react-bootstrap/Container"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Form from './contents/Form';
import Search from './contents/Search';
import Contact from './contents/Contact';
import Form2 from './contents/Form2';
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer"



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "Burlesque Directory",
      headerLinks : [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Form', path: '/form'},
        // { title: 'Form2', path: '/form2'},
        { title: 'Search' , path: '/search'},
        { title: 'Contact' , path: '/contact'},
      ],
      home: {
        title: "Burlesque Directory",
        subTitle: "A place for burlesque performers to connect"
      },
      about: {
        title: "About the Burlesque Directory"
      },
      form: {
        title: "Form"
      },
      form2: {
        title: "Form"
      },
      search: {
        title: "Search For Performers"
      },
      contact: {
        title: "Get In Touch"
      },
    }
  }

  render(){
    return(
      <AuthProvider>
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Burlesque Directory</Navbar.Brand >
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar=toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/form">Form</Link>
                {/* <Link className="nav-link" to="/form2">Form2</Link>  */}
                <Link className="nav-link" to="/search">Search</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

    <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
    <Route path="/about" exact render={() => <About title={this.state.about.title} />} />
    <Route path="/form" exact render={() => <Form form={this.state.form.title} />} />
    <Route path="/form2" exact render={() => <Form2 title={this.state.form2.title} />} /> 
    <Route path="/search" exact render={() => <Search title={this.state.search.title} />} />
    <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} subTitle={this.state.contact.subTitle} />} />

          <Footer />
        </Container>

      </Router>
      </AuthProvider>
    )
  }
}
export default App;





/* function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Form} />
         <PrivateRoute exact path="/form2" component={Form2} />
          <Route path="/search" component={Search} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </AuthProvider>
    );
  }
   */
  
