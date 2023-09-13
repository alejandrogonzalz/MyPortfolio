import classes from "./projects.module.scss";
import { clsx } from "clsx";

import { ThemeContext } from "../app/themeContext";
import { useContext, useEffect } from "react";
import { HLine } from "../shared/lines";
import { ProjectCard } from "./ProjectCard";
import { TerraCapitalCard } from "./cards/terracapital/TerraCapital";
import { DentalGoCard } from "./cards/dentalgo/DentalGo";

export const Projects = () => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";

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
        <div className={classes.project_container}>
          <HLine className={classes.horizontal_line}>
            <h1>Projects</h1>
          </HLine>

          <div className={classes.project_wrapper}>
            <div className={classes.project_item}>
              <TerraCapitalCard />
            </div>
            <div className={classes.project_item}>
              <DentalGoCard />
            </div>
            <div className={classes.project_item}>
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
