import { FC } from "react";
import { useAppSelector } from "../../../Hooks/reduxHooks";

import { Button } from "../../MiniComponents/Button";
import { HistoryItem } from "./HistoryItem";

import "./index.css";

export const HistoryNavBar: FC = () => {
  const historyRequests = useAppSelector(
    (state) => state.Console.historyRequests
  );

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
        <Button className="history-nav-bar__close">
          <img src="/icons/close.svg" alt="clear-history" />
        </Button>
      </div>
    </div>
  );
};
