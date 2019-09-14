import React from "react"
import {Header} from "../Header/Header.jsx";
import {Footer} from "../Footer/Footer.jsx";
import "./Layout.scss";


export const Layout = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            {props.children}
        </div>
    )
}
