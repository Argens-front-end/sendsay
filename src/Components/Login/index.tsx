import React, { useState } from "react";
import { LINK_GITHUB } from "Constants";
import sendsay from "Helpers/sendsay";
import { useAppDispatch } from "Hooks/reduxHooks";
import { Button, Icons, InputGroup, Link } from "Components/MiniComponents";

import "./index.css";
import { IErrorResLogin, ILoginData, initialLoginData } from "./types";

export const Login: React.FC = () => {
  const { checkAuth } = useAppDispatch();

  const [loginData, setLoginsData] = useState<ILoginData>(initialLoginData);
  const [loading, setLoading] = useState(false);

  const [errors, setError] = useState<string[]>([]);
  const [errorRes, setErrorRes] = useState<undefined | IErrorResLogin>();

  const onChangeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (loading) {
      return;
    }

    let value = e.target.value.replace(/[а-яё]/gi, "");

    if (e.target.id !== "password") {
      value = value.trim();
    }

    setLoginsData({
      ...loginData,
      [e.target.id]: value,
    });
  };

  const onSubmitLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    const errorsSubmit = [];
    if (!loginData.login) {
      errorsSubmit.push("login");
    }
    if (!loginData.password) {
      errorsSubmit.push("password");
    }

    if (errorsSubmit.length > 0) {
      setError(errorsSubmit);
      setLoading(false);
      return;
    }

    sendsay
      .login(loginData)
      .then(() => {
        document.cookie = "sendsay_session=" + sendsay.session;
        checkAuth();
      })
      .catch((res: IErrorResLogin) => {
        setErrorRes(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <div>
        <div className="login__logo">
          <Icons icon="Logo" />
        </div>
        <div className="login__form">
          <h2 className="login__title">API-консолька</h2>

          {errorRes && (
            <div className="login__error">
              <Icons icon="Men" />

              <div className="login__error_descr">
                <h4>Вход не вышел</h4>
                <div className="login__error_res">
                  {JSON.stringify(errorRes, undefined, 2)}
                </div>
              </div>
            </div>
          )}

          <form onSubmit={onSubmitLogin}>
            <InputGroup
              label="Логин"
              autoComplete="off"
              onChange={onChangeLogin}
              value={loginData.login}
              id="login"
              error={errors.includes("login")}
            />
            <InputGroup
              label="Сублогин"
              labelOptional="Опционально"
              autoComplete="off"
              onChange={onChangeLogin}
              value={loginData.sublogin}
              id="sublogin"
            />

            <InputGroup
              label="Пароль"
              type="password"
              autoComplete="off"
              onChange={onChangeLogin}
              value={loginData.password}
              id="password"
              error={errors.includes("password")}
            />
            <Button
              className="login__button"
              text="Войти"
              variant="primary"
              type="submit"
              loading={loading}
            />
          </form>
        </div>
        <div className="login__link">
          <Link link={LINK_GITHUB} text="github-link" />
        </div>
      </div>
    </div>
  );
};
