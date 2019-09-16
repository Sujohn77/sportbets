import React from "react"
import "./Layout.scss";
import HeaderContainer from "../Header/HeaderContainer.jsx";
import {Route} from "react-router";


export const Layout = (props) => {
    return (
        <div className="wrapper">
            <Route exact path={`/`} render={() => <HeaderContainer/>}/>
            <Route exact path={`/user_id=:user_id?`} render={() => <HeaderContainer/>}/>
            <Route path={`/user_id=:user_id?&match_id=:match_id?&sport_id=:sport_id?&lng=:lng?`} render={() => <HeaderContainer/>}/>
            <Route path={`/live/user_id=:user_id?`} render={() => <HeaderContainer/>}/>
            {props.children}
        </div>
    )
}
