import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";

import { Button } from "../../MiniComponents/Button";
import { Icons } from "../../MiniComponents/Icons";
import { HistoryItem } from "./HistoryItem";

import "./index.css";

export const HistoryNavBar: FC = () => {
  const historyRequests = useAppSelector(
    (state) => state.Console.historyRequests
  );

  const { clearHistoryResponse } = useAppDispatch();

  const onClickClearHistory = () => {
    clearHistoryResponse();
  };

  return (
    <div className="history-nav-bar">
      <div className="history-nav-bar__list">
        {historyRequests.map((item, index) => (
          <HistoryItem
            key={index + "HistoryItem"}
            status={item.status}
            name={item.name}
          />
        ))}
      </div>
      <div>
        <Button
          className="history-nav-bar__close"
          onClick={onClickClearHistory}
        >
          <Icons icon="Close" />
        </Button>
      </div>
    </div>
  );
};
