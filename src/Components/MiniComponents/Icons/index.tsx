import { FC } from "react";

import AlignRight from "./align-right.svg";
import Close from "./close.svg";
import EllipseError from "./ellipseError.svg";
import EllipseSuccess from "./ellipseSuccess.svg";
import Loader from "./loader.svg";
import LogOut from "./log-out.svg";
import Logo from "./logo.svg";
import Maximize from "./maximize.svg";
import SmallSize from "./smallsize.svg";
import DragElement from "./drag-element.svg";

const icons = {
  AlignRight,
  Close,
  EllipseError,
  EllipseSuccess,
  Loader,
  LogOut,
  Logo,
  Maximize,
  SmallSize,
  DragElement,
};

type IconsName =
  | "AlignRight"
  | "Close"
  | "EllipseError"
  | "EllipseSuccess"
  | "Loader"
  | "LogOut"
  | "Logo"
  | "Maximize"
  | "SmallSize"
  | "DragElement";

interface IconsProps {
  icon: IconsName;
  className?: string;
  alt?: string;
}

export const Icons: FC<IconsProps> = ({ className = "", icon, alt }) => {
  return <img src={icons[icon]} alt={alt || icon} className={className} />;
};
