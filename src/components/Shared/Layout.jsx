import React from "react"
import "./Layout.scss";
import HeaderContainer from "../Header/HeaderContainer.jsx";
import {Route} from "react-router";


export const Layout = (props) => {
    return (
        <div className="wrapper">
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <HeaderContainer/>}/>
            <Route path={`${process.env.PUBLIC_URL}/user_id=:user_id`} render={() => <HeaderContainer/>}/>
            <Route path={`${process.env.PUBLIC_URL}/live/user_id=:user_id`} render={() => <HeaderContainer/>}/>
            {props.children}
        </div>
    )
}
