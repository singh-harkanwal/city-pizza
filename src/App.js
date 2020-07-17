import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import About from './components/About';

class App extends Component {
  render() {
    return (
      //run npm install react-router-dom
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
