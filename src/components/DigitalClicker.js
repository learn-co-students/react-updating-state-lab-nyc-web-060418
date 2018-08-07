// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    };
  }

  incrementClicker = () =>
    this.setState(
      {
        timesClicked: ++this.state.timesClicked
      },
      () => console.log(this.state.timesClicked)
    );

  render() {
    return (
      <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
    );
  }
}
