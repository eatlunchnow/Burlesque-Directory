import React from 'react';

import './styles.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Form from './contents/Form';
import Search from './contents/Search';
import Contact from './contents/Contact';
import Form2 from './contents/Form2';
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Form} />
          {/* <PrivateRoute exact path="/form2" component={Form2} /> */}
          <Route path="/search" component={Search} />
          <Route path="/contact" component={Contact} />
          <Route path="/form2" component={Form2} />
        </div>
      </Router>
    </AuthProvider>
    );
  }
  
  export default App;
