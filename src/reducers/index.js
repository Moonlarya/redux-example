import { combineReducers } from "redux";
import { colorReducer } from "./colorReducer";
import { textReducer } from "./textReducer";

const rootReducer = combineReducers({ color: colorReducer, text: textReducer });

export default rootReducer;
