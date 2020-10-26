import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

getYear() {
    return new Date().getFullYear();
}
  render() {
    return (
    <div>
      <div className="footer">
          Copyright ©{this.getYear()} All Right Reserved by <a href="https://www.facebook.com/jakkapan.sitthikan.3/" style={{color:'white'}}> Jakkapn Sitthikan </a>&nbsp;
      </div>
    </div>
    )
  }
}

export default Footer;
