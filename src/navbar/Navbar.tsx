import { Outlet } from "react-router-dom";
import classes from "./navbar.module.scss";

import { NavElements } from "./NavElements";
import { ThemeSwitch } from "./utilities/switchers";
import { ThemeContext } from "../app/ThemeContext";
import { useContext, useEffect } from "react";
import clsx from "clsx";

export const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    console.log(themeContext?.theme);
  }, [themeContext?.theme]);

  return (
    <>
      <div
        className={clsx(classes.navbar, {
          [classes.light]: themeContext?.theme === "light",
        })}
      >
        <ThemeSwitch />
        <NavElements />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
