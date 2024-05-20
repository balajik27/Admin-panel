import { combineReducers } from "redux";
import { ProdReducer } from "./reducers/product";
import { UserReducer } from "./reducers/user";

export const AllReducers = combineReducers({
    Products : ProdReducer,
    Users : UserReducer,
})