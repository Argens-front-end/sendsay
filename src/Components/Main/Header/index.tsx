import { FC } from "react";
import { useFullScreen } from "../../../Hooks";
import { useAppSelector } from "../../../Hooks/reduxHooks";
import { Button } from "../../MiniComponents/Button";
import { Icons } from "../../MiniComponents/Icons";

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
        <Icons icon="Logo" />
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
            Выйти <Icons icon="LogOut" />
          </Button>
        </div>
        <div className="header__full-screen-btn">
          <Button onClick={onClickOpenCloseFullScreen}>
            {!fullscreen ? (
              <Icons icon="Maximize" />
            ) : (
              <Icons icon="SmallSize" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
