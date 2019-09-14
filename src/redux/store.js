import {createStore, combineReducers, applyMiddleware} from "redux";
// import {reducer as formReducer} from 'redux-form';

import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";
import {liveReducer} from "./live-reducer";

let reducers = combineReducers({
    app:appReducer,
    livePage:liveReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;