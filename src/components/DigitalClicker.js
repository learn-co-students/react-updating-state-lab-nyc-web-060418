import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementState = () => this.setState({
    timesClicked: ++this.state.timesClicked
  })
  render(){
    return (<button onClick={this.incrementState}>{this.state.timesClicked}</button>)
  }
}
