import { HISTORY_ITEMS } from "../../Constants";
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
      let historyFilter = state.historyRequests.filter(
        (historyItem) => historyItem.name !== action.payload.name
      );
      historyFilter.unshift(action.payload);
      historyFilter = historyFilter.slice(0, 20);
      localStorage.setItem(HISTORY_ITEMS, JSON.stringify(historyFilter));
      return {
        ...state,
        activeRequest: {
          reqJSON: JSON.stringify(action.payload.req, undefined, 2),
          resJson: JSON.stringify(action.payload.res, undefined, 2),
          status: action.payload.status,
        },
        historyRequests: historyFilter,
      };

    case ConsoleActionTypes.CONSOLE_CLEAR_HISTORY_REQ:
      localStorage.removeItem(HISTORY_ITEMS);
      return { ...state, historyRequests: [] };

    case ConsoleActionTypes.CONSOLE_INITIAL_HISTORY_REQ:
      return { ...state, historyRequests: action.payload };

    default:
      return state;
  }
}
