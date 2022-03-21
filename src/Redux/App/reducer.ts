import { AppAction, AppActionTypes, IAppState } from "./types";

const initialAppState: IAppState = {
  isAuth: false,
  loadingAuth: true,
};

export default function AppReducer(
  state: IAppState = initialAppState,
  action: AppAction
): IAppState {
  switch (action.type) {
    case AppActionTypes.APP_SUCCESS_LOGIN:
      return {
        ...state,
        isAuth: true,
        loadingAuth: false,
        accountInfo: action.payload,
      };

    case AppActionTypes.APP_ERROR_LOGIN:
      return {
        ...state,
        isAuth: false,
        loadingAuth: false,
      };

    default:
      return state;
  }
}
