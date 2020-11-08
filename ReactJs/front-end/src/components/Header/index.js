import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar justify-content-center">
          <span style={{ padding: "1%" }}>
            <span
              style={{
                backgroundColor: "#42D0B2",
                color: "white",
                borderRadius: ".25rem",
                padding: "8px",
                paddingTop: "5px",
              }}
            >
              Answer
            </span>
            &nbsp; This is an example of how to development lists page from UI
            Design.
          </span>
        </nav>
      </div>
    );
  }
}

export default Header;
