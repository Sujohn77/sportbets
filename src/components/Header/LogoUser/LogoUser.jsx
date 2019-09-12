import React from 'react';
import {UserInfo} from "./UserInfo/UserInfo.jsx";
import "../../../assets/css/LogoUser.scss"

export const LogoUser = () => {
    return  <div className="user__section">
        <div>
            <img src="" alt="LOGO"/>
        </div>
        <div>
            <UserInfo/>
        </div>
    </div>
}
