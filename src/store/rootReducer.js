import {combineReducers} from "redux";
import {GlobalReducer} from "./Global/reducer";

export default combineReducers({
  global: GlobalReducer,
});
