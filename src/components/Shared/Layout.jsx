import React from "react"
import "./Layout.scss";
import HeaderContainer from "../Header/HeaderContainer.jsx";


export const Layout = (props) => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            {props.children}
        </div>
    )
}
