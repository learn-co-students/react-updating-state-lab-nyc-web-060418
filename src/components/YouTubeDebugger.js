// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [], 
        user: null, 
        settings: { bitrate: 8, 
            video: { 
                resolution: '1080p' 
            } 
        } 
    }

    handleBitClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'  
                }  
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitClick} >
                    Bitrate Button
                </button>  

                <button className='resolution' onClick={this.handleResClick} >
                    Resolution Button
                </button> 
            </div>  
        )
    }
}

export default YouTubeDebugger;