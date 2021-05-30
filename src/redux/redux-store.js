import { combineReducers, createStore } from "redux";
import characterReducer from "./character-reducer";

let reducers = combineReducers({
    favoriteCharacters: characterReducer
})

let store = createStore(reducers);

export default store;