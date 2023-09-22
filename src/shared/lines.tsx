import classes from "./lines.module.scss";
import clsx from "clsx";

import { AppContext } from "../app/AppContext";
import { useContext } from "react";

import { animated } from "@react-spring/web";

export const VLine = ({ className, style, ...props }: any) => {
  const appContext = useContext(AppContext);

  const dark = appContext?.theme === "dark";
  const light = appContext?.theme === "light";
  const lineClass = clsx({ [classes.light]: light, [classes.dark]: dark });

  return (
    <animated.div
      className={clsx(lineClass, className)}
      style={style}
      {...props}
    ></animated.div>
  );
};

export const HLine = ({ className, children, style, ...props }: any) => {
  const appContext = useContext(AppContext);

  const dark = appContext?.theme === "dark";
  const light = appContext?.theme === "light";
  const lineClass = clsx({ [classes.light]: light, [classes.dark]: dark });

  return (
    <animated.div
      className={clsx(lineClass, className)}
      style={style}
      {...props}
    >
      {children}
    </animated.div>
  );
};
