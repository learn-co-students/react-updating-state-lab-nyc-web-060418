// Code DigitalClicker Component Here

import React, { Component } from 'react';

export default class DigitalClicket extends Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  increaseCount = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <button onClick={this.increaseCount}>{this.state.timesClicked}</ button>
    )
  }
}
