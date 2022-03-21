import { combineReducers } from "redux";
import AppReducer from "./App/reducer";
import * as AppActions from "./App/actions";

export const RootReducer = combineReducers({
  App: AppReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const AllActions = { ...AppActions };
