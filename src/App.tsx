import classes from "./app.module.scss";

import { Landing } from "./home/Landing";
import { About } from "./about/About";

import { useScroll, animated } from "@react-spring/web";
import { useState } from "react";

// import { clsx } from "clsx";

export const App = () => {
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
          className={classes.landing__page}
          style={{ opacity: opacity }}
        >
          <Landing />
        </animated.div>

        <animated.div
          className={classes.about__page}
          style={{
            clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
          }}
        >
          <About style={{ opacity: scrollYProgress }} />
        </animated.div>

        {new Array(2).fill(null).map((_, index) => (
          <div className={classes.full__page} key={index} />
        ))}
      </div>
    </>
  );
};
