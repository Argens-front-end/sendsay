import { FC } from "react";
import { useFullScreen } from "../../../Hooks";
import { useAppSelector } from "../../../Hooks/reduxHooks";
import { Button } from "../../MiniComponents/Button";

import "./index.css";

export const Header: FC = () => {
  const accountInfo = useAppSelector((state) => state.App.accountInfo);

  const { fullscreen, onCloseFullScreen, onOpenFullScreen } = useFullScreen();

  const onClickOpenCloseFullScreen = () => {
    if (fullscreen) {
      onCloseFullScreen();
    } else {
      onOpenFullScreen();
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img alt="logo" src="/icons/logo.svg" />
        <span>API-консолька</span>
      </div>

      <div className="header__menu">
        <div className="header__user-info">
          {accountInfo?.account}
          <span>:</span>
          {accountInfo?.sublogin}
        </div>
        <div className="header_logout-btn">
          <Button>
            Выйти <img src="/icons/log-out.svg" alt="log-out" />
          </Button>
        </div>
        <div className="header__full-screen-btn">
          <Button onClick={onClickOpenCloseFullScreen}>
            {!fullscreen ? (
              <img src="/icons/maximize.svg" alt="maximize" />
            ) : (
              <img src="/icons/smallsize.svg" alt="smallsize" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
