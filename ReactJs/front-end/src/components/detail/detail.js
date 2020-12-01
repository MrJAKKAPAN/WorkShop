import React, { Component } from "react";

class detail extends Component {
  componentDidMount() {
    const his = this.props.history;
    console.log(his);
  }
  render() {
    return <div>detail</div>;
  }
}

export default detail;
