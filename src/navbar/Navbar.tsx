import { Outlet } from "react-router-dom";
import classes from "./navbar.module.scss";

import { NavElements } from "./NavElements";
import { ThemeSwitch } from "./utilities/switchers";

export const Navbar = () => {
  return (
    <>
      <div className={classes.navbar}>
        <ThemeSwitch />
        <NavElements />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
