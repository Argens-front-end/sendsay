import { FC } from "react";
import { Header } from "./Header";
import { HistoryNavBar } from "./HistoryNavBar";

export const MainConsole: FC = () => {
  return (
    <div>
      <Header />
      <HistoryNavBar />
    </div>
  );
};
