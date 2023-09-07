import { Outlet } from "react-router-dom";
import classes from "./navbar.module.scss";

import { NavElements } from "./NavElements";
import { ThemeSwitch } from "./utilities/switchers";
import { ThemeContext } from "../app/ThemeContext";
import { useContext, useState, useEffect } from "react";
import clsx from "clsx";

export const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let navElements, navElementsMobile;
  if (screenWidth <= 760) {
    navElements = null;
    navElementsMobile = (
      <div>
        <NavElements className={classes.mobile} />
      </div>
    );
  } else if (screenWidth > 760) {
    navElements = <NavElements />;
    navElementsMobile = null;
  }

  return (
    <>
      <div
        className={clsx(classes.navbar, {
          [classes.light]: themeContext?.theme === "light",
        })}
      >
        <>
          <ThemeSwitch />
          {navElements}
        </>
      </div>

      <main>
        {navElementsMobile}
        <Outlet />
      </main>
    </>
  );
};
