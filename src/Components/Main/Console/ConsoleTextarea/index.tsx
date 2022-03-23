import classNames from "classnames";
import { FC, useMemo } from "react";

import "./index.css";

interface ConsoleTextareaProps {
  error: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  disabled?: boolean;
  label: string;
  width: number;
}

export const ConsoleTextarea: FC<ConsoleTextareaProps> = ({
  error,
  onChange,
  value,
  disabled,
  label,
  width,
}) => {
  const widthBlock = useMemo(() => {
    return width > 25 ? width : 25;
  }, [width]);

  return (
    <div
      className={classNames("console__item", {
        console__item_error: error,
      })}
      style={{ width: `calc(${widthBlock}% - 5px)` }}
    >
      <label>{label}</label>
      <textarea onChange={onChange} value={value} disabled={disabled} />
    </div>
  );
};
