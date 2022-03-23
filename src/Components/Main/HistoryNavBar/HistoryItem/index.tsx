import classNames from "classnames";
import { FC, useCallback, useRef, useState } from "react";
import { useOutside } from "../../../../Helpers";
import { Icons } from "../../../MiniComponents/Icons";

import "./index.css";

interface HistoryItemProps {
  status: boolean;
  name: string;
}

export const HistoryItem: FC<HistoryItemProps> = ({ status, name }) => {
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
        <Icons icon={"DragElement"} className="history-nav-bar__menu-icon" />
      </div>
      <div
        className={classNames("history-nav-bar__item_drop", {
          "history-nav-bar__item_active": isOpen,
        })}
      >
        {isOpen && <DropDownContant isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

interface DropDownContantProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownContant: FC<DropDownContantProps> = ({ isOpen, setIsOpen }) => {
  const closeDropDown = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const dropDownContantRef = useRef<HTMLDivElement>(null);
  useOutside(dropDownContantRef, closeDropDown);

  return (
    <div>
      <div className="history-nav-bar__item_drop-elem_mt" />
      <div ref={dropDownContantRef}>
        <div></div>
        <div className="history-nav-bar__item_drop-elem">Выполнить</div>
        <div className="history-nav-bar__item_drop-elem">Скопировать</div>
        <div className="history-nav-bar__item_drop-elem_decor" />
        <div className="history-nav-bar__item_drop-elem history-nav-bar__item_drop-elem_danger">
          Удалить
        </div>
      </div>
    </div>
  );
};
