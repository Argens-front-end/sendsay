import classNames from "classnames";
import React from "react";

import "./index.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({ className, error, ...props }) => {
  const classNamesInput = {
    input__error: error,
  };

  return (
    <input
      {...props}
      className={classNames("input", classNamesInput, className)}
    />
  );
};
