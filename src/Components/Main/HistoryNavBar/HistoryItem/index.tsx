import { FC } from "react";
import { Icons } from "../../../MiniComponents/Icons";

import "./index.css";

interface HistoryItemProps {
  status: boolean;
  name: string;
}

export const HistoryItem: FC<HistoryItemProps> = ({ status, name }) => {
  return (
    <div className="history-nav-bar__item">
      {status ? (
        <Icons icon="EllipseSuccess" alt="success" />
      ) : (
        <Icons icon="EllipseError" alt="error" />
      )}
      {name}
    </div>
  );
};
