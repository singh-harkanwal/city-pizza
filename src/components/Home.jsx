import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <header className="bgimg w3-display-container w3-grayscale-min">
          <div className="w3-display-bottomleft w3-padding w3-hide-small">
            <span className="w3-tag w3-large">Open from 10am to 12pm</span>
          </div>
          <div className="w3-display-middle w3-center">
            <span className="w3-text-black w3-hide-small" style={{fontSize:'70px'}}>CITY PIZZA</span>
            <span className="w3-text-black w3-hide-large w3-hide-medium" style={{fontSize:'30px'}}><b>CITY PIZZA</b></span>
          </div>
        </header>
        <div className="w3-container w3-padding-64 w3-grayscale w3-large">
          <div class="w3-content">
            <h1 className="w3-center w3-xlarge" style={{marginBottom:'64px'}}>Pizza</h1>
            <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Home;
