import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="mini-logo">
        <Link href='/about'>
            <img src="/img/V-34x36.png" width="42" height="46" alt="logo"/>
        </Link>
    </div>
    );
};

export default Logo;