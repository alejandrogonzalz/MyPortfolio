import { ThemeContext } from "../app/themeContext";
import { useContext } from "react";
import classes from "./lines.module.scss";

import clsx from "clsx";

export const VLine = ({ className, ...props }: any) => {
  const themeContext = useContext(ThemeContext);

  const dark = themeContext?.theme === "dark";
  const light = themeContext?.theme === "light";
  const lineClass = clsx({ [classes.light]: light, [classes.dark]: dark });

  return <div className={clsx(lineClass, className)} {...props}></div>;
};

export const HLine = ({ className, children, ...props }: any) => {
  const themeContext = useContext(ThemeContext);

  const dark = themeContext?.theme === "dark";
  const light = themeContext?.theme === "light";
  const lineClass = clsx({ [classes.light]: light, [classes.dark]: dark });

  return (
    <div className={clsx(lineClass, className)} {...props}>
      {children}
    </div>
  );
};
