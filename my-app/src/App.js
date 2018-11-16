import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Portfolio } from './Portfolio';
import { About } from './About';
import { Homepage } from './Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Link to="/">Home</Link>
          {' '}
          <Link to="/portfolio">Photography Portfolio</Link>
          <Link to="/about">About</Link>
         <Route exact path="/" component={Homepage} />
         <Route path="/portfolio" component={Portfolio} />
         <Route path="/about" component={About} />
        
        </div>
      </Router>
    );
  }
}

export default App;
