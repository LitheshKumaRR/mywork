import {messageReducer} from './Equip.reducer'
import { combineReducers } from "redux";
let rootReducer=combineReducers({
    wishMessage:messageReducer
})

export default rootReducer