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
                    <Link href='/about'>
                        <a>FOOTER</a>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Navbar