import {LivePage} from "./LivePage.jsx";
import {withRouter} from "react-router";
import {compose} from "redux";
import {getBalanceUser} from "../../../../redux/user-reducer";
import {connect} from "react-redux";


export default compose(
    withRouter,
    connect(null,{getBalanceUser})
)(LivePage);
