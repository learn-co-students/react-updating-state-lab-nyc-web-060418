// Code DigitalClicker Component Here

import React, { Component } from 'react'
export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  handleClick = (event) => {
    let timeClick = this.state.timesClicked +1
    this.setState({
      timesClicked: timeClick
    })
  }

  render() {
    return (
      <button onClick = {this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
