import { combineReducers } from "redux";
import { messageReducer } from './wish.Reducer'
import {counterReducer} from './Counter/counter.reducer'
let rootReducer = combineReducers({
  wishMessage: messageReducer,
  counter: counterReducer
});
export default rootReducer;

