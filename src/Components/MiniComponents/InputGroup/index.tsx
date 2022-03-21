import classNames from "classnames";
import React from "react";
import { Input, InputProps } from "../Input";

import "./index.css";

interface InputGroupProps extends InputProps {
  label?: string;
  labelOptional?: string;
  classNameInputGroup?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  labelOptional,
  classNameInputGroup = "",
  error,
  ...propsInput
}) => {
  const InputGroupClasses = {
    "input-group__error": error,
    [classNameInputGroup]: classNameInputGroup,
  };

  return (
    <div className={classNames("input-group", InputGroupClasses)}>
      <label>
        <div className="input-group__label">
          <span className={classNames({ "input-group__label_error": error })}>
            {label}
          </span>
          {labelOptional && (
            <span className="input-group__label-optional">{labelOptional}</span>
          )}
        </div>
        <Input error={error} {...propsInput} />
      </label>
    </div>
  );
};
