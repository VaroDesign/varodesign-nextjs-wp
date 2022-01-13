import React, { Component } from 'react';

class video extends Component {
    render() {
        return (
            <div className="varo-video">
                <video autoPlay={true} playsInline loop muted src="/video/VaroDesign optimased.mp4" type="video/mp4"/>
          </div>
        );
    }
}

export default video;