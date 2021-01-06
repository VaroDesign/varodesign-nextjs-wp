import Link from 'next/link';
import { NavItems } from './NavItems';
import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-menu">
                    {NavItems.map((item) => {
                        return (
                                <Link href={item.url}>
                                    <a className={item.cName}>{item.title}</a>
                                </Link>
                        )
                    })}
                </div>
            </nav>
        );
    }
}

export default Nav;