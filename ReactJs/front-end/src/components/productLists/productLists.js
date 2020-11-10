import React, { Component } from "react";
import { connect } from "react-redux";

export class productLists extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">productList</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(productLists);
