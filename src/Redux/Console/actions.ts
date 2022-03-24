import { Dispatch } from "redux";
import sendsay from "../../Helpers/sendsay";
import {
  ConsoleAction,
  ConsoleActionTypes,
  IActiveRequest,
  IHistoryResponse,
} from "./types";

export const onChangeConsoleReq = (value: string): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_ON_CHANGE_REQ,
  payload: value,
});

export interface IObjectReq extends Object {
  action: string;
}

export const submitRequest =
  (jsonObjReq: IObjectReq) => async (dispatch: Dispatch<ConsoleAction>) => {
    dispatch({ type: ConsoleActionTypes.CONSOLE_FETCH_REQ });
    try {
      const resSendSay = await sendsay.request(jsonObjReq);

      dispatch({
        type: ConsoleActionTypes.CONSOLE_ADD_RESPONSE,
        payload: {
          req: jsonObjReq,
          res: resSendSay,
          status: true,
          name: jsonObjReq.action,
        },
      });
    } catch (errorRes: any) {
      dispatch({
        type: ConsoleActionTypes.CONSOLE_ADD_RESPONSE,
        payload: {
          req: jsonObjReq,
          res: errorRes,
          status: false,
          name: jsonObjReq.action,
        },
      });
    }
  };

export const initHistoryResponse = (
  historyRes: IHistoryResponse[]
): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_INITIAL_HISTORY_REQ,
  payload: historyRes,
});

export const clearHistoryResponse = (): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_CLEAR_HISTORY_REQ_ALL,
});

export const addReqActive = (reqData: IActiveRequest): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_ADD_REQ_ACTIVE,
  payload: reqData,
});

export const deleteReqHistoryItem = (name: string): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_DELETE_HISTORY_REQ,
  payload: name,
});
