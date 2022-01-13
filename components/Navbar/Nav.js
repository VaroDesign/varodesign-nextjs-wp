import Link from 'next/link';
import { NavItems } from './NavItems';
import React, { useEffect } from 'react';
import { useRouter } from "next/router";

export default function Nav () {
    useEffect(function mount() {
        if (window.location.href.indexOf('photography') > -1) {
          document.getElementsByClassName('portfolio')[0].attributes[0].value="/icons/portfolio-active.svg";
         }
        if (window.location.href.indexOf('web-development') > -1) {
            document.getElementsByClassName('portfolio')[0].attributes[0].value="/icons/portfolio-active.svg";
        }
        if (window.location.href.indexOf('blog') > -1) {
          document.getElementsByClassName('blog')[0].attributes[0].value="/icons/blog-active.svg";
        }
      });
        const router = useRouter();
        return (
            <nav className="varo-nav">
                
                <div className="varo-nav__menu">
                    {NavItems.map((item) => {
                        return (
                            <div key={item.title} className="varo-nav__menu-item">
                                <Link href={item.url}>
                                    <div className="varo-nav__link">
                                        <img src={router.pathname == item.url ? item.iconActive : item.icon} className={item.cName} alt={item.alt} height={27} />
                                        <p className="varo-nav__text-mobile" style={router.pathname == item.url ? {color: '#93824e'} : {color: '#999'} }>
                                            {item.textMobile}
                                        </p>
                                    </div>
                                </Link>
                                <span className="tooltip">{item.title}</span>

                            </div>
                        )
                    })}
                </div>
            </nav>
        )
}