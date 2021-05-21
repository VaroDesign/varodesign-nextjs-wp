import React, { Component } from 'react';

class video extends Component {

    render() {
        return (
            <div>
                <video autoPlay loop>
                    <source src="/video/logo-efect.mp4"/>
                </video>
          </div>
        );
    }
}

export default video;