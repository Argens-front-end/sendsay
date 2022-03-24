export interface IConsoleState {
  historyRequests: IHistoryResponse[];
  activeRequest: IActiveRequest;
  loadingFetch: boolean;
}

export interface IActiveRequest {
  reqJSON: string;
  resJson: string;
  status: boolean;
}

export interface IHistoryResponse {
  status: boolean;
  name: string;
  req: object;
  res: object;
}

export enum ConsoleActionTypes {
  CONSOLE_ON_CHANGE_REQ = "CONSOLE_ON_CHANGE_REQ",
  CONSOLE_FETCH_REQ = "CONSOLE_FETCH_REQ",
  CONSOLE_ADD_REQ_ACTIVE = "CONSOLE_ADD_REQ_ACTIVE",
  CONSOLE_ADD_RESPONSE = "CONSOLE_ADD_RESPONSE",
  CONSOLE_INITIAL_HISTORY_REQ = "CONSOLE_INITIAL_HISTORY_REQ",
  CONSOLE_CLEAR_HISTORY_REQ_ALL = "CONSOLE_CLEAR_HISTORY_REQ_ALL",
  CONSOLE_DELETE_HISTORY_REQ = "CONSOLE_DELETE_HISTORY_REQ",
}

export type ConsoleAction =
  | onChangeReq
  | addHistoryResponse
  | initialHistoryResSet
  | clearHistoryRes
  | consoleFetchReq
  | addReqActive
  | deleteReqHistory;

interface onChangeReq {
  type: ConsoleActionTypes.CONSOLE_ON_CHANGE_REQ;
  payload: string;
}

interface consoleFetchReq {
  type: ConsoleActionTypes.CONSOLE_FETCH_REQ;
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
  type: ConsoleActionTypes.CONSOLE_CLEAR_HISTORY_REQ_ALL;
}

interface addReqActive {
  type: ConsoleActionTypes.CONSOLE_ADD_REQ_ACTIVE;
  payload: IActiveRequest;
}

interface deleteReqHistory {
  type: ConsoleActionTypes.CONSOLE_DELETE_HISTORY_REQ;
  payload: string;
}

export interface IObjectReq extends Object {
  action: string;
}
