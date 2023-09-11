import classes from "./projects.module.scss";
import { clsx } from "clsx";

import { ThemeContext } from "../app/themeContext";
import { useContext, useEffect } from "react";
// import { useScroll, animated } from "@react-spring/web";
import { HLine } from "../shared/lines";
import { ProjectCard } from "./ProjectCard";

// const X_LINES = 40;
// const PAGE_COUNT = 2;
// const INITIAL_WIDTH = 50;

export const Projects = () => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";
  
  // const { scrollYProgress } = useScroll({
  //   default: {
  //     immediate: true,
  //   },
  // })

  useEffect(() => {
    document.body.style.backgroundColor = light
      ? "hsl(60, 7.7%, 97.5%)"
      : "hsl(50, 8%, 12%)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [light]);


  return (
    <>
    <div className={clsx(classes.body, { [classes.light]: light })}>
      {/* <div className={classes.animated__layers}>
        <animated.div className={classes.bar_container}>
          {Array.from({ length: X_LINES }).map((_, i) => (
                  <animated.div
                    key={i}
                    className={classes.bar}
                    style={{
                      width: scrollYProgress.to(value => {
                        const percentilePosition = (i + 1) / X_LINES

                        return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - value) * Math.PI) / 1.5) ** 32
                        // const newWidth = value * 1000 
                        // return newWidth
                      }),
                    }}
                  />
            ))}    
        </animated.div>

        <animated.div className={classes.bar_container_inverted}>
          {Array.from({ length: X_LINES }).map((_, i) => (
                  <animated.div
                    key={i}
                    className={classes.bar}
                    style={{
                      width: scrollYProgress.to(value => {
                        const percentilePosition = 1- (i + 1) / X_LINES

                        return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - value) * Math.PI) / 1.5) ** 32
                      }),
                    }}
                  />
            ))}    
        </animated.div>
    </div> */}
                    
    <div className={classes.project_container}>
      <HLine className={classes.horizontal_line}><h1>Projects</h1></HLine>

      <div className={classes.project_wrapper}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

    </div>
  

    </div>
    {/* <div className={classes.circle1} />
    <div className={classes.circle2} /> */}
  </>
  );
};

