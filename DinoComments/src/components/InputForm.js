import React, { Component } from "react";

import Preview from "./Preview";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "",
      message: "",
      previewOn: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      message: "Your application was submitted!"
    });
  };

  logClick = event => {
    event.preventDefault();
    console.log("click");
    this.setState({
      previewOn: !this.state.previewOn
    });
  };

  handleChange = event => {
    this.setState({
      preview: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="application-input">
          <label>Apply Here: </label>
          <textarea
            id="application-text"
            rows="8"
            cols="100"
            onChange={this.handleChange}
          />
          <input id="submit" type="submit" value="Submit" />
          <p id="message">{this.state.message}</p>
        </form>
        <button onClick={this.logClick} id="preview-toggle">
          Show Preview
        </button>
        {this.state.previewOn ? (
          <section id="application-preview">{this.state.preview}</section>
        ) : null}
      </div>
    );
  }
}

export default InputForm;
