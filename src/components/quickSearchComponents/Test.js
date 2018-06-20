import React, { Component } from "react";

class Test extends Component {
  constructor() {
    super();

    this.state = {
      name: "VanBau"
    };
  }

  componentWillMount() {
    this.setState({ name: "Daleel" });
  }

  render() {
    return (
      <div>
        <h1>
          {" "}
          Hello {this.state.name}, {this.props.name}
        </h1>{" "}
      </div>
    );
  }
}

export default Test;
