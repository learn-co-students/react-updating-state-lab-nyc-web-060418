// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    };
  }

  incrementClicker = () => {
    let safeClick = this.state.timesClicked;
    this.setState(
      {
        timesClicked: ++safeClick
      },
      () => console.log(this.state.timesClicked)
    );
  };

  render() {
    return (
      <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
    );
  }
}
