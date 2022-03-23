import { FC } from "react";

import "./index.css";

interface LinkProps {
  link: string;
  text?: string;
}

export const Link: FC<LinkProps> = ({ link, text }) => {
  return (
    <a href={link} className="link">
      {text}
    </a>
  );
};
