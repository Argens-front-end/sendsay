import { AppAction, IAppState } from "./types";

const initialAppState: IAppState = {};

export default function AppReducer(
  state: IAppState = initialAppState,
  action: AppAction
) {
  switch (action.type) {
    case "APP_SUCCESS_LOGIN":
      return state;

    default:
      return state;
  }
}
