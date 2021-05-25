import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="logo">
        <Link href='/about'>
            <img src="/img/V-34x36.png" alt="logo"/>
        </Link>
    </div>
    );
};

export default Logo;