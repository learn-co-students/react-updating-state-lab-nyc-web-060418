import React, { Component } from 'react';

class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    handleClick = (event) => {
        let freshTimeClick = this.state.timesClicked + 1

        this.setState({
            timesClicked: freshTimeClick
        })
    }

    render() {
        return (
            <button onClick={this.handleClick} > 
            {this.state.timesClicked} 
            </button>
        );
    }
}

export default DigitalClicker;
