import { combineReducers } from "redux";
import DropdownData from "./reducer_saveDropdownData";

const rootReducer = combineReducers({
  DropdownData: DropdownData
});

export default rootReducer;
