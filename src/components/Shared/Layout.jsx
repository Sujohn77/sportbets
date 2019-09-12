import React from "react"
import {Header} from "../Header/Header.jsx";
import {Footer} from "../Footer/Footer.jsx";

export const Layout = (props) => {
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
    )
}
