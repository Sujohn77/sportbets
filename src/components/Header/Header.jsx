import React from 'react';
import {LogoUser} from "./LogoUser/LogoUser.jsx";
import {Nav} from "./Nav/Nav.jsx";
import "../../assets/css/Header.scss";

export const Header = () => {
    return <header>
        <div>
            <LogoUser/>
            <Nav/>
        </div>
    </header>
}
