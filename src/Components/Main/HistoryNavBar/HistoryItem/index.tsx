import { FC } from "react";

import "./index.css";

interface HistoryItemProps {
  status: boolean;
  name: string;
}

export const HistoryItem: FC<HistoryItemProps> = ({ status, name }) => {
  return (
    <div className="history-nav-bar__item">
      {status ? (
        <img src="/icons/ellipseSuccess.svg" alt="success" />
      ) : (
        <img src="/icons/ellipseError.svg" alt="error" />
      )}
      {name}
    </div>
  );
};
