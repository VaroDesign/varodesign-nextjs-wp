import Link from 'next/link';
import React, { Component } from 'react';
import Nav from './Nav'

class Navbar extends Component {

    render(){
        return (
            <div className="nav-bar">
                <div className="logo">
                    <Link href='/about'>
                        <a>LOGO</a>
                    </Link>
                </div>
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