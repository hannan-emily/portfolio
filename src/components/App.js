import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';

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
          <About />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
