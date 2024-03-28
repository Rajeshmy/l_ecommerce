/** In-built/third party packages, services */
import { combineReducers } from "redux";
/** custom packages and services  */
import productReducer from "./productslice";


const rootReducer = combineReducers({
  product: productReducer,
  
});

export default rootReducer;