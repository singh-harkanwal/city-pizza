import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className="w3-top">
        <div className="w3-bar w3-large w3-opacity w3-hover-opacity-off w3-black">
          <Link to="/" className="w3-bar-item w3-button">Home</Link>
          <Link to="/menu" className="w3-bar-item w3-button">Menu</Link>
          <Link to="/about" className="w3-bar-item w3-button">About</Link>
          <Link to="/contact" className="w3-bar-item w3-button">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
