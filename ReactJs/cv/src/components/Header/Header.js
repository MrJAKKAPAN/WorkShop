import React, { Component } from 'react';
import { withRouter, Link} from "react-router-dom";
import './Header.scss'
class Header extends Component {
  render() {
    return (
        <div className="headerAll">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                  {/* <a href="#" className="navbar-band"> */}
                    <img src="game.png" height='60px' width='60px'/>
                    &nbsp; Jakkapan Sitthikan
                  {/* </a> */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                      <span className="navbar-toggler-icon"></span>  
                  </button>

              <div className="collapse navbar-collapse" id="navbarToggler">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                      <li className="nav-item">
                      <Link to="/home" className="nav-link">
                          <a href="#" className="nav-link active" aria-current="page">Home</a> 
                      </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/history" className="nav-link">
                          <a href="#" className="nav-link active" aria-current="page">About</a> 
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/history" className="nav-link">
                          <a href="#" className="nav-link active" aria-current="page">Service</a> 
                        </Link>
                      </li>
                      
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                          <a href="#" className="nav-link active" aria-current="page">Contact</a> 
                        </Link>
                      </li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
    
    );
  }
}

export default withRouter(Header);
