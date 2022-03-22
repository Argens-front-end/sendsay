import classNames from "classnames";
import { FC, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { Button } from "../../MiniComponents/Button";
import "./index.css";

export const Console: FC = () => {
  const { onChangeConsoleReq, submitRequest } = useAppDispatch();

  const [errorReqJson, setErrorReqJson] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const { reqJSON, resJson } = useAppSelector(
    (state) => state.Console.activeRequest
  );

  const onChangeReq: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (errorReqJson) {
      setErrorReqJson(false);
    }
    onChangeConsoleReq(e.target.value);
  };

  const validatingJSON = useCallback((jsonString) => {
    let jsonObj;
    try {
      jsonObj = JSON.parse(jsonString);
    } catch (error) {
      setErrorReqJson(true);
    }
    return jsonObj;
  }, []);

  const onClickFormating = () => {
    const jsonObj = validatingJSON(reqJSON);

    if (jsonObj) {
      onChangeConsoleReq(JSON.stringify(jsonObj, undefined, 2));
    }
  };

  const onClicksubmitReq = () => {
    setLoadingBtn(true);
    const jsonObj = validatingJSON(reqJSON);
    if (jsonObj && typeof jsonObj.action === "string") {
      return submitRequest(jsonObj, setLoadingBtn);
    }

    setErrorReqJson(true);
    setLoadingBtn(false);
  };

  return (
    <div className="console">
      <div className="console__main">
        <div
          className={classNames("console__item", {
            console__item_error: errorReqJson,
          })}
        >
          <textarea onChange={onChangeReq} value={reqJSON} />
        </div>
        <div className="console__drag">:</div>
        <div className="console__item">
          <textarea disabled value={resJson}></textarea>
        </div>
      </div>
      <div className="console__bottom">
        <div>
          <Button
            variant={"primary"}
            onClick={onClicksubmitReq}
            loading={loadingBtn}
            className="console__bottom_submit"
          >
            Отправить
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>Link</div>
        <div className="console__bottom_formating">
          <Button onClick={onClickFormating}>
            <img src="/icons/align-right.svg" alt="icon-formationg" />
            Форматировать
          </Button>
        </div>
      </div>
    </div>
  );
};
