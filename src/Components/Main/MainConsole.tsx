import { FC, useEffect } from "react";
import { HISTORY_ITEMS } from "Constants";
import { useAppDispatch } from "Hooks/reduxHooks";
import { Console } from "./Console";
import { Header } from "./Header";
import { HistoryNavBar } from "./HistoryNavBar";

export const MainConsole: FC = () => {
  const { initHistoryResponse } = useAppDispatch();

  useEffect(() => {
    const historyItems = localStorage.getItem(HISTORY_ITEMS);
    
    if (historyItems) {
      initHistoryResponse(JSON.parse(historyItems));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <HistoryNavBar />
      <Console />
    </div>
  );
};
