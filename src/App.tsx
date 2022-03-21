import React, { useEffect } from "react";
import { Login } from "./Components/Login";
import { useAppDispatch, useAppSelector } from "./Hooks/reduxHooks";

function App() {
  const { loadingAuth, isAuth } = useAppSelector((state) => state.App);

  const { chechAuth } = useAppDispatch();

  useEffect(() => {
    chechAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {loadingAuth ? (
        <div>Loading</div>
      ) : isAuth ? (
        <div>Main Contant</div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
