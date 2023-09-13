import classes from "./research.module.scss";

import { ThemeContext } from "../../../app/themeContext";
import { useContext } from "react";

import { animated } from "@react-spring/web";
import { clsx } from "clsx";

export const Research = () => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";
  let content;

  return (
    <>
      <animated.div
        className={clsx(classes.main_container, { [classes.light]: light })}
      >
        {content}
      </animated.div>
      <animated.div
        className={clsx(classes.main_container, classes.back, {
          [classes.light]: light,
        })}
      ></animated.div>
    </>
  );
};
