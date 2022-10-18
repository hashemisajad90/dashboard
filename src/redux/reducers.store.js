import { combineReducers } from "redux";
import { reducer } from "./users/user.reducer";

export const reducers = combineReducers({
    client: reducer,
});