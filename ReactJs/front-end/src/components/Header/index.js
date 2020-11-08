import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar justify-content-center">
          <p
            style={{
              backgroundColor: "#42D0B2",
              color: "white",
              borderRadius: ".25rem",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            Answer
          </p>
          <p>
            &nbsp; This is an example of how to development lists page from UI
            Design.
          </p>
        </nav>
      </div>
    );
  }
}

export default Header;
