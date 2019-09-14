import {UserAPI} from "../api/api";
import {getHashSha256} from "../hash/sha256";

const GET_USER_BALANCE = "GET_USER_BALANCE";

let initialState = {
    balance:null
}

export const userReducer = (state = initialState,action ) => {
    switch(action.type){
        case GET_USER_BALANCE:
            return {
                ...state,
                balance: action.payload,
            };
        default: return state;
    }

}

export let getBalanceUser = (userId) => (dispatch) => {
    const hash = getHashSha256("187640199:123456");
    UserAPI.getBalance(userId,hash).then(response => {
        dispatch(setBalance(response));
    })
}

export let setBalance = (balance) =>({type: GET_USER_BALANCE,payload: balance});
