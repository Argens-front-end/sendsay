import classNames from "classnames";
import { FC, useCallback, useMemo, useRef, useState } from "react";
import { useOutside } from "Hooks";
import { useAppDispatch } from "Hooks/reduxHooks";
import { IObjectReq } from "Redux/Console/types";
import { Icons } from "Components/MiniComponents";

import "./index.css";

interface HistoryItemProps {
  status: boolean;
  name: string;
  req: object;
  res: object;
}

export const HistoryItem: FC<HistoryItemProps> = ({
  status,
  name,
  req,
  res,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div
        className="history-nav-bar__item"
        onClick={!isOpen ? onClickOpen : undefined}
      >
        <span>
          {status ? (
            <Icons
              icon="EllipseSuccess"
              alt="success"
              className="history-nav-bar__status"
            />
          ) : (
            <Icons
              icon="EllipseError"
              alt="error"
              className="history-nav-bar__status"
            />
          )}
          {name}
        </span>
        <Icons icon="DragElement" className="history-nav-bar__menu-icon" />
      </div>
      <div
        className={classNames("history-nav-bar__item_drop", {
          "history-nav-bar__item_active": isOpen,
        })}
      >
        {isOpen && (
          <DropDownContant
            setIsOpen={setIsOpen}
            req={req}
            res={res}
            name={name}
          />
        )}
      </div>
    </div>
  );
};

interface DropDownContantProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  req: object;
  res: object;
  name: string;
}

const DropDownContant: FC<DropDownContantProps> = ({
  setIsOpen,
  req,
  res,
  name,
}) => {
  const closeDropDown = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const dropDownContantRef = useRef<HTMLDivElement>(null);
  useOutside(dropDownContantRef, closeDropDown);

  const { submitRequest, addReqActive, deleteReqHistoryItem } =
    useAppDispatch();

  const reqData = useMemo(() => {
    return {
      reqJSON: JSON.stringify(req, undefined, 2),
      status: true,
      resJson: JSON.stringify(res, undefined, 2),
    };
  }, [req, res]);

  const onClickSendReq = () => {
    addReqActive(reqData);
    submitRequest(req as IObjectReq);
    setIsOpen(false);
  };

  const onClickCopyReq = () => {
    addReqActive(reqData);
    setIsOpen(false);
  };

  const onClickDel = () => {
    deleteReqHistoryItem(name);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="history-nav-bar__item_drop-elem_mt" />
      <div ref={dropDownContantRef}>
        <div></div>
        <div
          className="history-nav-bar__item_drop-elem"
          onClick={onClickSendReq}
        >
          Выполнить
        </div>
        <div
          className="history-nav-bar__item_drop-elem"
          onClick={onClickCopyReq}
        >
          Скопировать
        </div>
        <div className="history-nav-bar__item_drop-elem_decor" />
        <div
          className="history-nav-bar__item_drop-elem history-nav-bar__item_drop-elem_danger"
          onClick={onClickDel}
        >
          Удалить
        </div>
      </div>
    </div>
  );
};
