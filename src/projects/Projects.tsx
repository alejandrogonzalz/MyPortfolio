import classes from "./projects.module.scss";
import { clsx } from "clsx";

import { ThemeContext } from "../app/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";
  const [sidebarOpen, setSideBarOpen] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = light
      ? "hsl(60, 7.7%, 97.5%)"
      : "hsl(50, 8%, 12%)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [light]);

  const sidebarProps = useSpring({
    left: sidebarOpen ? "0vw" : "-300px",
  });

  return (
    <div className={clsx(classes.body, { [classes.light]: light })}>
      <div className={classes.side_trigger}>
        <div
          className={classes.main_trigger}
          onClick={() => setSideBarOpen(!sidebarOpen)}
        >
          <FontAwesomeIcon icon={faFile} />
        </div>
      </div>

      <animated.nav style={{ ...sidebarProps }} className={classes.sidebar}>
        <header className={classes.title}>
          <div>
            <FontAwesomeIcon icon={faChevronDown} />
            PROJECTS
          </div>
        </header>
      </animated.nav>
    </div>
  );
};
