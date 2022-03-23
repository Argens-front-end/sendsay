export interface IConsoleState {
  historyRequests: IHistoryResponse[];
  activeRequest: {
    reqJSON: string;
    resJson: string;
    status: boolean;
  };
}

export interface IHistoryResponse {
  status: boolean;
  name: string;
  req: object;
  res: object;
}

export enum ConsoleActionTypes {
  CONSOLE_ON_CHANGE_REQ = "CONSOLE_ON_CHANGE_REQ",
  CONSOLE_ADD_RESPONSE = "CONSOLE_ADD_RESPONSE",
  CONSOLE_INITIAL_HISTORY_REQ = "CONSOLE_INITIAL_HISTORY_REQ",
  CONSOLE_CLEAR_HISTORY_REQ = "CONSOLE_CLEAR_HISTORY_REQ",
}

export type ConsoleAction =
  | onChangeReq
  | addHistoryResponse
  | initialHistoryResSet
  | clearHistoryRes;

interface onChangeReq {
  type: ConsoleActionTypes.CONSOLE_ON_CHANGE_REQ;
  payload: string;
}

interface addHistoryResponse {
  type: ConsoleActionTypes.CONSOLE_ADD_RESPONSE;
  payload: IHistoryResponse;
}

interface initialHistoryResSet {
  type: ConsoleActionTypes.CONSOLE_INITIAL_HISTORY_REQ;
  payload: IHistoryResponse[];
}

interface clearHistoryRes {
  type: ConsoleActionTypes.CONSOLE_CLEAR_HISTORY_REQ;
}
