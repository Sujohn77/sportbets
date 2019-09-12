import React from 'react';
import "./UserInfo.scss"
import userDefault from "./user-default.svg";

export const UserInfo = () => {
    return  <>
        <div className="user__data">
            <div>Баланс</div>
            <div>100 00 000$</div>
        </div>
        <div className="user__white">
            <img src={userDefault} height="40" alt="user"/>
        </div>
    </>

}
