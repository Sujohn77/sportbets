import React from 'react';
import {UserInfo} from "./UserInfo/UserInfo.jsx";
import logo from "./logo.svg";
import "./LogoUser.scss"

export const LogoUser = () => {
    return  <div className="user__section">
        <div className="logo__white">
            <img src={logo} alt="LOGO" width="55"/>
        </div>
        <div className="d-flex align-items-center">
            <UserInfo/>
        </div>
    </div>
}
