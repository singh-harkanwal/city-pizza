import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return(
      <footer class="w3-center w3-black w3-padding-16">
        <p>City Pizza&#169; {new Date().getFullYear()}</p>
      </footer>
    );
  }
}

export default Footer;
