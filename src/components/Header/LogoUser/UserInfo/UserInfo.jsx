import React from 'react';
import "./UserInfo.scss"
import userDefault from "./user-default.svg";

export const UserInfo = ({balance}) => {
    return  <>
        <div className="user__data">
            <div>Баланс</div>
            <div>{balance || 0}</div>
        </div>
        <div className="user__white">
            <img src={userDefault} height="40" alt="user"/>
        </div>
    </>

}
