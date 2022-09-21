import React, { Component } from 'react';
import Nav from './Nav';
import Logo from './logo';

class Navbar extends Component {
    render(){
        return (
            <nav className="VaroBoy__navigation">
                <div className="VaroBoy__navigation-bar">
                    <Logo/>
                    <Nav/>
                    <div className="VaroBoy__navigation--footer">
                        <p>made<br/>in</p>
                        <img width="40" src={"/icons/react-logo.svg"} className="App-logo" alt="react-logo" />
                    </div>
                </div>
            </nav>
        )
    }

}

export default Navbar