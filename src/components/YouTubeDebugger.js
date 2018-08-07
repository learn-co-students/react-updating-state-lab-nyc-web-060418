import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  switchBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      },
    })
  }

  switchRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
        ...this.state.settings.video,
        resolution: '720p'
        }
      },
    })
  }

  render(){
    return(
      <div>
       <button
         className="bitrate"
         onClick={this.switchBitRate}
       >
         Change bitrate
       </button>
       <button
         className="resolution"
         onClick={this.switchRes}
       >
         Change resolution
       </button>
     </div>
    )
  }
}
