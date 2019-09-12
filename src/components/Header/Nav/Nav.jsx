import React from 'react';
import {NavLink} from "react-router-dom";
import "./../../../assets/css/nav.scss";

export const Nav = () => {
    return <nav>
        <div>
            <NavLink to={"/"}>Главная</NavLink>
            <NavLink to={"/live"}>Live</NavLink>
            <NavLink to={"/line"}>Линия</NavLink>
            <NavLink to={"/casino"}>Казино</NavLink>
            <div>
                <img src="" alt="search img"/>
            </div>
        </div>
    </nav>
}
