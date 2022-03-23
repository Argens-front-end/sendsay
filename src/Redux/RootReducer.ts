import { combineReducers } from "redux";
import AppReducer from "./App/reducer";
import * as AppActions from "./App/actions";

import ConsoleReducer from "./Console/reducer";
import * as ConsoleActions from "./Console/actions";

export const RootReducer = combineReducers({
  App: AppReducer,
  Console: ConsoleReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const AllActions = { ...AppActions, ...ConsoleActions };
