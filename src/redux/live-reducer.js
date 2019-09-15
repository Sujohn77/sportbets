import {GameAPI, UserAPI} from "../api/api";
import {getHashSha256} from "../hash/sha256";

const SET_USER_BALANCE = "SET_USER_BALANCE";
const SET_GAME_DATA = "SET_GAME_DATA";

let initialState = {
    balance:null,
    data: null
}

export const liveReducer = (state = initialState, action ) => {
    switch(action.type){
        case SET_USER_BALANCE:
            return {
                ...state,
                balance: action.payload,
            };
        case SET_GAME_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default: return state;
    }

}

export let getBalanceUser = (userId,hash) => (dispatch) => {
    const hash = getHashSha256(userId+":123456");
    UserAPI.getBalance(userId,hash).then(data => {
        dispatch(setBalance(data.text));
    })
}

export let getGameData = (gameId,lang) => (dispatch) => {
    GameAPI.getDataGame(gameId,lang).then(data => {
        //dispatch(setGameData(data));
    })
}

export let setBalance = (balance) =>({type: SET_USER_BALANCE,payload: balance});
export let setGameData = (data) =>({type: SET_GAME_DATA,payload: data});
