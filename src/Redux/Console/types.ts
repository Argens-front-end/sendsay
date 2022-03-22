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
}

export type ConsoleAction = onChangeReq | addHistoryResponse;

interface onChangeReq {
  type: ConsoleActionTypes.CONSOLE_ON_CHANGE_REQ;
  payload: string;
}

interface addHistoryResponse {
  type: ConsoleActionTypes.CONSOLE_ADD_RESPONSE;
  payload: IHistoryResponse;
}
