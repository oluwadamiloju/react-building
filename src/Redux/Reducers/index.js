import { combineReducers } from "redux";
import { pillarReducer } from "./pillar"

const reducers = combineReducers({ pillarState: pillarReducer})

export default reducers