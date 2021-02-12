import Link from 'next/link';
import { NavItems } from './NavItems';
import React, { useState } from 'react';
import { useRouter } from "next/router";

export default function Nav () {
        const router = useRouter();
        return (
            <nav>
                <div className="nav-menu">
                    {NavItems.map((item) => {
                        return (
                            <div key={item.title} className="nav-item">
                                <Link href={item.url}>
                                    <img src={router.pathname == item.url ? item.iconActive : item.icon} className={item.cName}/>
                                </Link>
                                <span className="tooltip">{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </nav>
        )
}