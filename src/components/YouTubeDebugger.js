import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    state = {
        errors: [], 
        user: null, 
        settings: { bitrate: 8, 
                    video: { resolution: '1080p' } 
                } 
        
    }

    handleBitClick = (event) => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12 }
        })
    }

    handleResClick = (event) => {
        this.setState({
            settings: {...this.state.settings, video: {resolution: '720p'}}
        })
    }

    render() {
        return (
            <div>

            <button className="bitrate" onClick={this.handleBitClick} >Bitrate</button>
            <button className="resolution" onClick={this.handleResClick} >Resolution</button>

            </div>
        );
    }
}

export default YouTubeDebugger;
