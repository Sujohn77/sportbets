import {LivePage} from "./LivePage.jsx";
import {withRouter} from "react-router";
import {compose} from "redux";
import {getBalanceUser, getGameData} from "../../../../redux/live-reducer";
import {connect} from "react-redux";


export default compose(
    withRouter,
    connect(null,{getBalanceUser,getGameData})
)(LivePage);
