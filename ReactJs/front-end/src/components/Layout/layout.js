import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./layout.css";

class layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="float">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <Link to="/ProductGrids" className="active btn btn-1">
                  <input type="radio" name="options" id="option1" checked />
                  <i class="fas fa-th-large" />
                </Link>
                <Link to="/ProductLists" className="btn btn-2">
                  <input type="radio" name="options" id="option2" />
                  <i class="fas fa-list" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default withRouter(layout);
