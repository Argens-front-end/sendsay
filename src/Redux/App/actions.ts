import { Dispatch } from "redux";
import { getCookie } from "../../Helpers";
import sendsay from "../../Helpers/sendsay";
import { AppAction, AppActionTypes, IAccountInfo } from "./types";

export const successAuth = (accountInfo: IAccountInfo): AppAction => ({
  type: AppActionTypes.APP_SUCCESS_LOGIN,
  payload: accountInfo,
});

export const errorAuth = (): AppAction => ({
  type: AppActionTypes.APP_ERROR_LOGIN,
});

export const checkAuth = () => (dispatch: Dispatch<AppAction>) => {
  const session = getCookie("sendsay_session");

  if (session) {
    sendsay.setSessionFromCookie();
    sendsay
      .request({
        action: "pong",
      })
      .then((res: IAccountInfo) => {
        dispatch(successAuth({ account: res.account, sublogin: res.sublogin }));
      })
      .catch(() => {
        dispatch(errorAuth());
      });
  } else {
    dispatch(errorAuth());
  }
};
