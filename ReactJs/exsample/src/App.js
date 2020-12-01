import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    message: "game",
    note: ["Note#1", "Note#2", "Note#3", "Note#4"],
    value: "",
  };
  componentDidMount() {
    this.noteInput.focus();
  }

  addNote = (e) => {
    if (e.key === "Enter") {
      this.setState({ note: [...this.state.note, e.target.value], value: "" });
    }
  };
  changValue = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.note.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <input
            type="text"
            value={this.state.value}
            onChange={this.changValue}
            onKeyUp={this.addNote}
            ref={(input) => (this.noteInput = input)}
          />

          {/* {this.state.note.length > 1 ? (
            <p> You have note.</p>
          ) : (
            <p> You Don't have</p>
          )} */}

          {/* <input
            type="text"
            onKeyUp={(e) => {
              console.log(e.target.value);
            }} */}
          {/* onChange={(e) => {
              console.log(e.target.value);
            }}
          /> */}
        </div>
      </div>
    );
  }
}

//Stateless Functional Component
// const App = () => {
//   return <h1>Hello</h1>;
// };

export default App;
