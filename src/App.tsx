import classes from "./app.module.scss";

import { Landing } from "./home/Landing";
import { About } from "./about/About";

import { useScroll, animated } from "@react-spring/web";
import { useState } from "react";

import { ThemeContext } from "./app/ThemeContext";
import { useContext } from "react";
import { Space } from "./about/space";
import clsx from "clsx";

export const App = () => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";

  const [opacity, setOpacity] = useState(1);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setOpacity(1 - scrollYProgress * 3);
    },
  });

  return (
    <>
      <div className={classes.body}>
        <animated.div
          className={clsx(classes.landing__page, { [classes.light]: light })}
          style={{ opacity: opacity }}
        >
          <Landing style={{ opacity: opacity }} />
        </animated.div>

        <animated.div
          className={clsx(classes.about__page, {
            [classes.about_light]: light,
          })}
          style={{
            clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
          }}
        >
          <About style={{ opacity: scrollYProgress }} />
          <Space />
        </animated.div>

        {new Array(2).fill(null).map((_, index) => (
          <div className={classes.full__page} key={index} />
        ))}
      </div>
    </>
  );
};
