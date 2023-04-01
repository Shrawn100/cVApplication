import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      number: "",
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleMailChange = (event) => {
    this.setState({ mail: event.target.value });
  };
  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };
  handleSubmit() {
    this.setState({ general: false });
  }
  handleEdit() {
    this.setState({ general: true });
  }
  render() {
    let Form = (
      <div className="general">
        <div className="fullName">
          <label htmlFor="name">Full Name</label>
          <input
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            id="name"
            name="name"
          ></input>
        </div>
        <div className="mail">
          <label htmlFor="mail">Email</label>
          <input
            onChange={this.handleMailChange}
            value={this.state.mail}
            type="email"
            id="mail"
            name="mail"
          ></input>
        </div>
        <div className="number">
          <label htmlFor="number">Phone Number</label>
          <input
            onChange={this.handleNumberChange}
            value={this.state.number}
            type="tel"
            id="number"
            name="number"
          ></input>
        </div>
      </div>
    );

    let complete = (
      <div className="general">
        <div>Full Name: {this.state.name}</div>
        <div>Email: {this.state.mail}</div>
        <div>Phone Number: {this.state.number}</div>
      </div>
    );

    return (
      <div className="generalContainer">
        {this.state.general ? Form : complete}{" "}
        <div className="button">
          <button onClick={this.handleEdit} type="button">
            Edit
          </button>
          <button onClick={this.handleSubmit} type="button">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default General;
