// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    this.setState((prevState) => {
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render(){
    return (
      <div>
        <button style={{fontSize: '300px'}} onClick={this.handleClick} >{this.state.timesClicked}</button>
      </div>
    )
  }
}
