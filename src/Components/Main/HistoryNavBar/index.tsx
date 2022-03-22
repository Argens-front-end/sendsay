import { FC } from "react";

import { Button } from "../../MiniComponents/Button";
import { HistoryItem } from "./HistoryItem";

import "./index.css";

export const HistoryNavBar: FC = () => {
  return (
    <div className="history-nav-bar">
      <div className="history-nav-bar__list">
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
        <HistoryItem status={true} name={"track"} />
      </div>
      <div>
        <Button className="history-nav-bar__close">
          <img src="/icons/close.svg" alt="clear-history" />
        </Button>
      </div>
    </div>
  );
};
