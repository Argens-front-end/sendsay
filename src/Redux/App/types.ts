export interface IAppState {}

export type AppAction = successLogin;

interface successLogin {
  type: "APP_SUCCESS_LOGIN";
}
