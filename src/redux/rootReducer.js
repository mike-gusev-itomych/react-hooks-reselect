import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  productsApp: productsReducer
});

export default rootReducer;
