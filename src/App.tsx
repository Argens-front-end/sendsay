import React, { useEffect } from "react";
import { Login } from "Components/Login";
import { MainConsole } from "Components/Main/MainConsole";
import { useAppDispatch, useAppSelector } from "Hooks/reduxHooks";

function App() {
  const { loadingAuth, isAuth } = useAppSelector((state) => state.App);

  const { checkAuth } = useAppDispatch();

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {loadingAuth ? <div>Loading</div> : isAuth ? <MainConsole /> : <Login />}
    </div>
  );
}

export default App;
