import { FC } from "react";
import sendsay from "Helpers/sendsay";
import { useFullScreen } from "Hooks";
import { useAppDispatch, useAppSelector } from "Hooks/reduxHooks";
import { Button, Icons } from "Components/MiniComponents";

import "./index.css";

export const Header: FC = () => {
  const accountInfo = useAppSelector((state) => state.App.accountInfo);

  const { errorAuth } = useAppDispatch();

  const { fullscreen, onCloseFullScreen, onOpenFullScreen } = useFullScreen();

  const onClickOpenCloseFullScreen = () => {
    if (fullscreen) {
      onCloseFullScreen();
    } else {
      onOpenFullScreen();
    }
  };

  const onClickLogOut = () => {
    sendsay
      .request({
        action: "logout",
      })
      .then(() => {
        errorAuth();
      });
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
          <Button onClick={onClickLogOut}>
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
