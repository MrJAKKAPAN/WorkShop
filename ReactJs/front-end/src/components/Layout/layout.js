import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./layout.css";

class layout extends Component {
  componentDidMount() {
    let his = this.props.history;
    console.log(his);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* map */}
          <div className="col" style={{ marginTop: "5rem" }}>
            <div className="float">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <Link to="/ProductGrids" className="btn btn-1 active">
                  <input
                    type="radio"
                    name="option"
                    id="option1"
                    defaultChecked
                  />
                  <i className="fas fa-th-large" />
                </Link>
                <Link to="/ProductLists" className="btn btn-2">
                  <input type="radio" name="option" id="option2" />
                  <i className="fas fa-list" />
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
