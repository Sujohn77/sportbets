import React from 'react';
import {LogoUser} from "./LogoUser/LogoUser.jsx";
import "./Header.scss";

export const Header = (props) => {
    return <header>
        <div className="header__container">
            <div className="header__centered">
                <LogoUser {...props}/>
            </div>
        </div>
    </header>
}
