// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    
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

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateResolution = () => {
        this.setState(
            {
                settings: {
                    ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        )
    }
    
    
    
    render() {
        return (
            <div>

                <button
                    onClick={this.updateBitrate} 
                    className = 'bitrate'
                >Bitrate to TWELVE</button>

                <button
                    onClick={this.updateResolution}
                    className='resolution'
                >Resolution to 720p</button>
                
            </div>
        );
    }
}

export default YouTubeDebugger;
