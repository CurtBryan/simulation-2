import React, { Component } from "react";
import Pass2 from "./pass2";

class Pass1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hey: "I Passed this prop!"
    };
  }
  render() {
    return (
      <div>
        <Pass2 hey={this.state.hey} />
      </div>
    );
  }
}

export default Pass1;
