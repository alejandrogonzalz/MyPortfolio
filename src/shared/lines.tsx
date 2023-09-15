import { AppContext } from "../app/AppContext";
import { useContext } from "react";
import classes from "./lines.module.scss";

import clsx from "clsx";

export const VLine = ({ className, ...props }: any) => {
  const appContext = useContext(AppContext);

  const dark = appContext?.theme === "dark";
  const light = appContext?.theme === "light";
  const lineClass = clsx({ [classes.light]: light, [classes.dark]: dark });

  return <div className={clsx(lineClass, className)} {...props}></div>;
};

export const HLine = ({ className, children, ...props }: any) => {
  const appContext = useContext(AppContext);

  const dark = appContext?.theme === "dark";
  const light = appContext?.theme === "light";
  const lineClass = clsx({ [classes.light]: light, [classes.dark]: dark });

  return (
    <div className={clsx(lineClass, className)} {...props}>
      {children}
    </div>
  );
};
