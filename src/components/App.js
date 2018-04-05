import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import Technologies from './Technologies';
import Nav from './Nav';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Home />
          <Nav />
          <Projects />
          <Technologies />
        </div>
      </Router>
    );
  }
}

export default App;
