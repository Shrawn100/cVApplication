import "./App.css";
import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Practical from "./Practical";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: true,
      education: true,
      practical: true,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.setState({ general: false, education: false, practical: false });
  }
  handleEdit() {
    this.setState({ general: true, education: true, practical: true });
  }
  render() {
    return (
      <div className="Container">
        <div className="header">
          <h1>Cv Application</h1>
          <div className="button">
            <button onClick={this.handleEdit} type="button">
              Edit
            </button>
            <button onClick={this.handleSubmit} type="button">
              Submit
            </button>
          </div>
        </div>
        <div>
          <General general={this.state.general}></General>
          <Education></Education>
          <Practical></Practical>
        </div>
      </div>
    );
  }
}

export default App;
