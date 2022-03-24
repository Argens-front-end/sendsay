import classNames from "classnames";
import { FC, useCallback, useMemo, useState } from "react";
import { CONSOLE_SIZE, LINK_GITHUB } from "../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { Button } from "../../MiniComponents/Button";
import { Icons } from "../../MiniComponents/Icons";
import { Link } from "../../MiniComponents/Link";
import { ConsoleTextarea } from "./ConsoleTextarea";

import "./index.css";

export const Console: FC = () => {
  const { onChangeConsoleReq, submitRequest } = useAppDispatch();

  const [errorReqJson, setErrorReqJson] = useState(false);

  const initialConsoleSize = useMemo(() => {
    const initialSize = localStorage.getItem(CONSOLE_SIZE);
    if (initialSize) {
      return +initialSize;
    } else {
      return 50;
    }
  }, []);

  const [leftTextareaWidth, setLeftTxextAreaWidth] =
    useState(initialConsoleSize);
  const [mouseDownResize, setMouseDownResize] = useState(false);

  const { reqJSON, resJson, status } = useAppSelector(
    (state) => state.Console.activeRequest
  );

  const loadingBtn = useAppSelector((state) => state.Console.loadingFetch);

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
   
    const jsonObj = validatingJSON(reqJSON);
    if (jsonObj && typeof jsonObj.action === "string") {
      return submitRequest(jsonObj);
    }

    setErrorReqJson(true);
  };

  const onMouseMove = function (e: MouseEvent) {
    const windowInnerWidth = document.documentElement.clientWidth;
    const leftWidth = (e.pageX / windowInnerWidth) * 100;

    localStorage.setItem(CONSOLE_SIZE, leftWidth.toString());
    setLeftTxextAreaWidth(leftWidth);
  };

  const onMouseUp = function (e: MouseEvent) {
    setMouseDownResize(false);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDownResize: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setMouseDownResize(true);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      className={classNames("console", { console__resize: mouseDownResize })}
    >
      <div className="console__main">
        <ConsoleTextarea
          value={reqJSON}
          onChange={onChangeReq}
          error={errorReqJson}
          label="Запрос:"
          disabled={loadingBtn}
          width={leftTextareaWidth}
        />
        <div className="console__drag" onMouseDown={onMouseDownResize}>
          <Icons icon="DragElement" alt="drag" />
        </div>
        <ConsoleTextarea
          value={resJson}
          disabled
          error={!status}
          label="Ответ:"
          width={100 - leftTextareaWidth}
        />
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
        <div className="console__bottom_link">
          <Link link={LINK_GITHUB} text="github-link" />
        </div>
        <div className="console__bottom_formating">
          <Button onClick={onClickFormating}>
            <Icons icon="AlignRight" alt="icon-formationg" />
            Форматировать
          </Button>
        </div>
      </div>
    </div>
  );
};
