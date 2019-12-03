import { combineReducers } from "redux";
import { default as ficha} from './fichaReducer'


const rootReducer = combineReducers({
  ficha
});

export default rootReducer;

