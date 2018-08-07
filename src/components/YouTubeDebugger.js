// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: "1080p" }
      }
    };
  }

  changeBitrate = () =>
    this.setState(
      {
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      },
      () => console.log(this.state.settings.bitrate)
    );

  changeResolution = () =>
    this.setState(
      {
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: "720p"
          }
        }
      },
      () => console.log(this.state.settings)
    );

  render() {
    return (
      <div className="youtube-container">
        <button onClick={this.changeBitrate} className="bitrate">
          Change bitrate
        </button>{" "}
        <button onClick={this.changeResolution} className="resolution">
          Change resolution
        </button>
      </div>
    );
  }
}
