import { Outlet } from "react-router-dom";
import classes from "./navbar.module.scss";

import { NavElements } from "./NavElements";

export const Navbar = () => {
  return (
    <>
      <div className={classes.navbar}>
        <NavElements />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
