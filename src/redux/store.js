import {createStore, combineReducers, applyMiddleware} from "redux";
// import {reducer as formReducer} from 'redux-form';

import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    app:appReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;