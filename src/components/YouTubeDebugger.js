// Code YouTubeDebugger Component Here
// js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
import React, {Component} from 'react'
export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateClick = (event) => {
    this.setState({
      settings: {...this.state.settings, bitrate:12}
    })
  }

  handleResolutionClick = (event) => {
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}}
    })
  }

  render() {
    return (
      <div>
        <button className = 'bitrate' onClick = {this.handleBitrateClick}>Bitrate</button>
        <button className = 'resolution' onClick = {this.handleResolutionClick}>Resolution</button>
      </div>
    )
  }
}
