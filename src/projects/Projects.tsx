import classes from "./projects.module.scss";
import { clsx } from "clsx";

import { AppContext } from "../app/AppContext";
import { useContext, useEffect } from "react";
import { HLine } from "../shared/lines";
import { TerraCapitalCard } from "./cards/terracapital/TerraCapital";
import { DentalGoCard } from "./cards/dentalgo/DentalGo";
import { ResearchCard } from "./cards/research/Research";

import { animated, useSpring } from "@react-spring/web";

export const Projects = () => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";

  const animation = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: [{ transform: "translateX(0%)", opacity: 1 }],
    config: {
      tension: 280,
      friction: 22,
      duration: 200,
    },
  });

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
      <animated.div
        className={clsx(classes.body, { [classes.light]: light })}
        style={animation}
      >
        <div className={classes.project_container}>
          <HLine className={classes.horizontal_line}>
            <h1 className={classes.main_title}>Projects</h1>
          </HLine>

          <div className={classes.project_wrapper}>
            <div className={classes.project_item}>
              <TerraCapitalCard />
            </div>
            <div className={classes.project_item}>
              <DentalGoCard />
            </div>
            <div className={classes.project_item}>
              <ResearchCard />
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};
