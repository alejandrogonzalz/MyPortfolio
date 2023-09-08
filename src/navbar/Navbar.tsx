import classes from "./navbar.module.scss";

import { Outlet } from "react-router-dom";
import { NavElements } from "./NavElements";
import { ThemeSwitch } from "./utilities/switchers";
import { ThemeContext } from "../app/ThemeContext";
import { useContext, useState, useEffect, useRef } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import clsx from "clsx";

export const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);
  const navMobileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navMobileRef.current &&
        !navMobileRef.current.contains(e.target as Node)
      ) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  let navElements, navElementsMobile;
  if (screenWidth <= 760) {
    navElements = (
      <button className={classes.nav_trigger} onClick={() => setNavOpen(true)}>
        <HamburgerMenuIcon />
      </button>
    );
    navElementsMobile = (
      <>
        <NavElements
          ref={navMobileRef}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          className={clsx(classes.mobile, {
            [classes.mobile_light]: themeContext?.theme === "light",
          })}
        />
      </>
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
