import React from "react";
import "./index.css";

import classNames from "classnames";
import { Icons } from "Components/MiniComponents";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  variant?: "none" | "primary";
  large?: "mini" | "normal";
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  children,
  variant = "none",
  large = "normal",
  className = "",
  disabled,
  loading,
  onClick,
}) => {
  const classButton = {
    button__mini: large === "mini",
    button__primary: variant === "primary",
    button__primary_loading: loading,
    [className]: className,
  };

  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!loading && onClick) onClick(e);
  };

  return (
    <button
      className={classNames("button", classButton)}
      disabled={disabled || loading}
      onClick={onClickButton}
    >
      {loading ? (
        <Icons icon="Loader" className="button__loaded" />
      ) : (
        children || text
      )}
    </button>
  );
};
