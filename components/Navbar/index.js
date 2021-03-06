import Link from 'next/link';
import React, { Component } from 'react';
import Nav from './Nav';
import Logo from './logo';

class Navbar extends Component {

    render(){
        return (
            <div className="nav-bar">
                <Logo/>
                <Nav/>
                <div className="footer">
                    <p>made<br/>in</p>
                    <img width="40" src={"/icons/react-logo.svg"} className="App-logo" alt="react-logo" />
                </div>
            </div>
        )
    }

}

export default Navbar