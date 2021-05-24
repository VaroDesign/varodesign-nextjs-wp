import React, { Component, useRef } from 'react';

class video extends Component {

    render() {
        return (
            <div className="">
                <video autoPlay={true} loop muted id="ref" src="/video/logo-efect.mp4"/>
          </div>
        );
    }
}

export default video;