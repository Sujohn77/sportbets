import {Header} from "./LivePage.jsx";
import {withRouter} from "react-router";
import {compose} from "redux";
import {getBalanceUser} from "../../../../redux/user-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    balance: state.userPage.balance
})

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Header);
