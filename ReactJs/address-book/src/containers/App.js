import React, { Component } from "react";
// import Form from "../components/Form";
// import Con from "../components/Contacts";
import { Form, Con } from "../components";

export class App extends Component {
  state = {
    contacts: [{ name: "jakkapan Sitthikan", address: "99/8" }],
  };

  // เอาค่าจาก Contacts มาเพื่อโยนไปใส่ในหน้า form เพื่อไปแสดง
  createCon = (contacts) => {
    this.setState({
      contacts: [...this.state.contacts, contacts],
    });
  };
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.createCon} />
        <hr />
        {/* ส่งข้อมูลทั้งหมดไปที่ contacts*/}
        <Con {...this.state} />
      </div>
    );
  }
}

export default App;
