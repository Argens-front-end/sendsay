import React from "react";
import "./index.css";

import classNames from "classnames";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  variant?: "none" | "primary";
  large?: "mini" | "normal";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  children,
  variant = "none",
  large = "normal",
  className = "",
  disabled,
  loading,
}) => {
  const classButton = {
    button__mini: large === "mini",
    button__primary: variant === "primary",
    [className]: className,
  };

  return (
    <button className={classNames("button", classButton)} disabled={disabled}>
      {loading ? (
        <img alt="loading" src="/icons/loader.svg" className="button__loaded" />
      ) : (
        children || text
      )}
    </button>
  );
};
