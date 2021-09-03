import { combineReducers, createStore } from "redux";
import appReducer from "./appReducer";

const reducers = combineReducers({
    app: appReducer
});

const store = createStore(reducers);

window.store = store;

export default store;