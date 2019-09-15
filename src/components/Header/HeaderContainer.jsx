import React,{useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Header} from "./Header.jsx";
import {getBalanceUser} from "../../redux/live-reducer";
import {withRouter} from "react-router";

const HeaderContainer = (props) => {

    useEffect(()=>{
        let balanceUpdate;
        if(props.match.params.user_id){
           balanceUpdate =  setInterval(() => {
                props.getBalanceUser(props.match.params.user_id);
            },5000)
        }
        return () => {
            clearInterval(balanceUpdate);
        }
    },[props.match.params.user_id]);

    return <Header {...props}/>
}

let mapStateToProps = (state) => {
    return{
        balance: state.livePage.balance
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{getBalanceUser})
)(HeaderContainer);
