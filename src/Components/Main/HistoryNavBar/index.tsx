import { FC } from "react";
import { useAppDispatch, useAppSelector } from "Hooks/reduxHooks";

import { Button, Icons } from "Components/MiniComponents";
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
          <HistoryItem key={index + "HistoryItem"} {...item} />
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
