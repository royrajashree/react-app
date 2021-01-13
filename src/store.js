import {createStore, combineReducers} from "redux";

import todos from "./reducer/todo.js";

const rootReducer = combineReducers({
    todos
})

const store = createStore(rootReducer);

export default store;