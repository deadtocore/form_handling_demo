import React, { Component } from "react";

class StateHandlerUsingClassCompo extends Component {
  constructor() {
    super();
    this.state = {
      message: "Please Hit That Like Button",
      buttonName: "Like",
    };
  }

  // Conditional Rendering concept with event handling concept.
  handleEvent() {
    if (this.state.buttonName === "Like") {
      this.setState({
        message: "Thanks For Liking",
        buttonName: "Unlike",
      });
    } else {
      this.setState({
        message: "Please Hit That Like Button",
        buttonName: "Like",
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <hr />
        <h4 className="text-danger">{this.state.message}</h4>
        <button
          className="btn btn-success mt-3"
          onClick={() => this.handleEvent()}
        >
          {this.state.buttonName}
        </button>
      </React.Fragment>
    );
  }
}

export default StateHandlerUsingClassCompo;
