import { Dispatch } from "redux";
import sendsay from "../../Helpers/sendsay";
import { ConsoleAction, ConsoleActionTypes, IHistoryResponse } from "./types";

export const onChangeConsoleReq = (value: string): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_ON_CHANGE_REQ,
  payload: value,
});

interface IObjectReq extends Object {
  action: string;
}

export const submitRequest =
  (
    jsonObjReq: IObjectReq,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  async (dispatch: Dispatch<ConsoleAction>) => {
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
      setLoading(false);
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
      setLoading(false);
    }
  };

export const initHistoryResponse = (
  historyRes: IHistoryResponse[]
): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_INITIAL_HISTORY_REQ,
  payload: historyRes,
});

export const clearHistoryResponse = (): ConsoleAction => ({
  type: ConsoleActionTypes.CONSOLE_CLEAR_HISTORY_REQ,
});
