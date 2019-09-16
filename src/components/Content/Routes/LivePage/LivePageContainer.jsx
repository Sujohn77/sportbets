import React,{useState,useEffect} from "react";
import {LivePage} from "./LivePage.jsx";
import {withRouter} from "react-router";
import {compose} from "redux";
import {getBalanceUser, getGameData} from "../../../../redux/live-reducer";
import {connect} from "react-redux";

const LivePageContainer = (props) =>{
    const [width,setWidth] = useState(720);

    useEffect(() => {
        props.getGameData(props.match.params.match_id || 260237556,props.match.params.lng || "en")

        window.innerWidth > 720? setWidth(720) : setWidth(window.innerWidth);

        window.addEventListener('resize',() => {(window.innerWidth > 720)? setWidth(720) : setWidth(window.innerWidth);});

    },[])

    return <LivePage {...props} width={width}/>
}

export default compose(
    withRouter,
    connect( null,{getGameData,getBalanceUser})
)(LivePageContainer);
