export interface IAppState {
  isAuth: boolean;
  loadingAuth: boolean;
  accountInfo?: IAccountInfo;
}

export interface IAccountInfo {
  account: string;
  sublogin: string;
}

export type AppAction = successLogin | errorLogin;

export enum AppActionTypes {
  APP_SUCCESS_LOGIN = "APP_SUCCESS_LOGIN",
  APP_ERROR_LOGIN = "APP_ERROR_LOGIN",
}

interface successLogin {
  type: AppActionTypes.APP_SUCCESS_LOGIN;
  payload: {
    account: string;
    sublogin: string;
  };
}

interface errorLogin {
  type: AppActionTypes.APP_ERROR_LOGIN;
}
