// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }

  changeBitrate = (event) => {
    this.setState(() => {
      let newState = {...this.state}
      newState.settings.bitrate = 12
      return newState
    })
  }

  changeResolution = (event) => {
    this.setState(() => {
      let newState = {...this.state}
      newState.settings.video.resolution = "720p"
      return newState
    })
  }

  render(){
    return (
      <div>
        <button style={{fontSize: '100px'}} className="bitrate" onClick={this.changeBitrate} >Bitrate</button>
        <button style={{fontSize: '100px'}} className="resolution" onClick={this.changeResolution} >Resolution</button>
      </div>
    )
  }
}
