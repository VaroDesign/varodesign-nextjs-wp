import React, { Component } from 'react';

class video extends Component {
    render() {
        return (
            <div className="">
                <video autoPlay={true} loop muted src="/video/VaroDesign optimased.mp4"/>
          </div>
        );
    }
}

export default video;