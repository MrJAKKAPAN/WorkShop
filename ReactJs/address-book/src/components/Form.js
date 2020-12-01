import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    address: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // name,address ออกมาจาก state
    const { name, address } = this.state;
    this.props.onSubmit({
      name: name,
      address: address,
    });
    // console.log(this.state);
    // ล้างค่าใน input หลังกด submit เสด
    this.clearForm();
  };

  clearForm = () => {
    this.setState({ name: "", address: "" });
  };

  ChangState = (state) => (e) => this.setState({ [state]: e.target.value });

  render() {
    const { name, address } = this.state;
    return (
      <div>
        <h2>Address</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              ref={(input) => (this.nameInput = input)}
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.ChangState("name")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              ref={(input) => (this.addressInput = input)}
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={this.ChangState("address")}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
