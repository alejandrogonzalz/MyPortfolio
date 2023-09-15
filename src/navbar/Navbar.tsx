import classes from "./navbar.module.scss";

import { Outlet } from "react-router-dom";
import { NavElements } from "./NavElements";
import { ThemeSwitch } from "./utilities/switchers";
import { AppContext } from "../app/AppContext";
import { useContext, useState, useEffect, useRef } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import clsx from "clsx";
import { ResumeDialog } from "./utilities/resume";

export const Navbar = () => {
  const appContext = useContext(AppContext);
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
            [classes.mobile_light]: appContext?.theme === "light",
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
          [classes.light]: appContext?.theme === "light",
        })}
      >
        <>
          <ThemeSwitch />
          {navElements}
        </>
      </div>

      <main>
        <ResumeDialog />
        {navElementsMobile}
        <Outlet />
      </main>
    </>
  );
};
