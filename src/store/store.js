import loginReducer from "../store/reducer/loginReducer";
import { createStore, combineReducers } from "redux";
export const store = createStore(
  combineReducers({
    loginReducer,
  })
);
