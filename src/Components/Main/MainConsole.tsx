import { FC } from "react";
import { Console } from "./Console";
import { Header } from "./Header";
import { HistoryNavBar } from "./HistoryNavBar";

export const MainConsole: FC = () => {
  return (
    <div>
      <Header />
      <HistoryNavBar />
      <Console />
    </div>
  );
};
