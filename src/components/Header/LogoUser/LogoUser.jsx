import React from 'react';
import {UserInfo} from "./UserInfo/UserInfo.jsx";
import logo from "./media/logo.svg";
import "./LogoUser.scss"
import telegramLogo from "./media/telegram.svg";

export const LogoUser = (props) => {
    return <div className="user__section">
        <div className="col-md-2 col-3 p-0">
            <div className="logo__white h-100 w-auto">
                <img src={logo} alt="LOGO" className="h-100 w-100"/>
            </div>
        </div>
        <div className="d-flex align-items-center justify-content-end col-md-2 col-3 p-0">
            {!props.balance && <img className="h-100 w-auto telegram__img" src={telegramLogo} alt="telegram"/>}
            {props.balance && <UserInfo {...props}/>}
        </div>
    </div>
}
