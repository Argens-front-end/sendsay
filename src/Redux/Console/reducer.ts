import { ConsoleAction, ConsoleActionTypes, IConsoleState } from "./types";

const initialConsoleState: IConsoleState = {
  historyRequests: [],
  activeRequest: {
    reqJSON: "",
    resJson: "",
    status: true,
  },
};

export default function ConsoleReducer(
  state: IConsoleState = initialConsoleState,
  action: ConsoleAction
): IConsoleState {
  switch (action.type) {
    case ConsoleActionTypes.CONSOLE_ON_CHANGE_REQ:
      return {
        ...state,
        activeRequest: { ...state.activeRequest, reqJSON: action.payload },
      };

    case ConsoleActionTypes.CONSOLE_ADD_RESPONSE:
      return {
        ...state,
        activeRequest: {
          reqJSON: JSON.stringify(action.payload.req, undefined, 2),
          resJson: JSON.stringify(action.payload.res, undefined, 2),
          status: action.payload.status,
        },
        historyRequests: [action.payload, ...state.historyRequests],
      };

    default:
      return state;
  }
}
