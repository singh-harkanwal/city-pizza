import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

class Contact extends Component {
  render() {
    return(
      <React.Fragment>
        <Navbar/>
        <header className="smimg w3-display-container w3-grayscale-min">
        </header>
        <div className="w3-container w3-padding-64 w3-grayscale-min w3-large">
          <div className="w3-content">
            <h1 className="w3-center w3-xlarge" style={{marginBottom:'64px'}}>Contact</h1>
            <div className="w3-col m6 w3-large w3-margin-bottom">
              <i style={{width:'30px'}}></i> Adelaide, SA<br/>
              <i style={{width:'30px'}}></i> Phone: +61.406.000.000<br/>
              <i style={{width:'30px'}}> </i> Email: email@mail.com<br/>
            </div>
            <p><span className="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Contact;
