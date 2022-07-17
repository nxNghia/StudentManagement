import { commonReducer } from "./common.reducer";
import { userReducer } from "./user.reducer";
import { subjectReducer } from "./subject.reducer";
import { classReducer } from "./class.reducer";

import { combineReducers } from "redux";
export default combineReducers({
    userReducer,
    commonReducer,
    subjectReducer,
    classReducer
});
