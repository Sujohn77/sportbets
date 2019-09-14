import {compose} from "redux";
import {connect} from "react-redux";
import {Header} from "./Header.jsx";

let mapStateToProps = (state) => {

    return{
        balance: state.livePage.balance
    }

}

export default compose(connect(mapStateToProps))(Header);
