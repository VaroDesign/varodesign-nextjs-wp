import React, { useEffect } from 'react';
import VLogo from "../../public/img/VaroBoy-Logo-Symbol.svg";

export default function Nav () {
    useEffect(() => {
        if (document.querySelector('.VaroBoy__Home')) {
          document.querySelector('.VaroBoy__mini-logo').style.visibility = 'hidden';
        }
    });
    return (
        <div className="VaroBoy__mini-logo">
            <a href="/">
                <VLogo/>
            </a>
        </div>
    );
}