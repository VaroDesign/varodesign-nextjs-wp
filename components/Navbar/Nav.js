import Link from 'next/link';
import { NavItems } from './NavItems';
import React, {Component, useState} from 'react';
import { useRouter } from "next/router";


export default function Nav () {
        const router = useRouter();
        const [hovered, setHovered] = useState(false);
        const toggleHover = () => setHovered(!hovered);
        return (
            <nav>
                <div className="nav-menu">
                    {NavItems.map((item) => {
                        return (
                            <div key={item.title} className="nav-item">
                                <Link href={item.url}>
                                    <img src={router.pathname == item.url ? item.iconActive : item.icon} className={item.cName} onMouseEnter={toggleHover} onMouseLeave={toggleHover}/>
                                </Link>
                                <span className="tooltip">{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </nav>
        )
}