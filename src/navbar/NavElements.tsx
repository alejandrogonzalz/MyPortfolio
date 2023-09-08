import classes from "./navbar.module.scss";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

import { clsx } from "clsx";
import { ThemeContext } from "../app/ThemeContext";
import { forwardRef, ForwardedRef, useContext } from "react";

interface NavElement {
  text: string;
  path: string | undefined | null;
}

interface FnElement {
  icon: string;
  path: string;
}

export const FnElement = ({ icon, path }: FnElement) => {
  const content =
    icon === "linkedin" ? (
      <LinkedInLogoIcon className={classes.social_icon} />
    ) : (
      <GitHubLogoIcon className={classes.social_icon} />
    );

  return (
    <div className={classes.fn_element}>
      <a href={path} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </div>
  );
};

export const FnElements = () => {
  const fnElements = [
    { icon: "linkedin", path: "https://www.linkedin.com/in/alejandrogonzalz/" },
    { icon: "github", path: "https://github.com/alejandrogonzalz" },
  ];
  return (
    <div className={classes.fn_elements}>
      {fnElements.map((item, index) => {
        return <FnElement key={index} icon={item.icon} path={item.path} />;
      })}
    </div>
  );
};

const NavElement = ({ text, path }: NavElement) => {
  const themeContext = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "About") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 0);
    } else if (text === "Home") {
      window.scrollTo(0, 0);
      navigate("/");
    } else if (typeof path === "string") {
      navigate(path);
    } else if (text === "Resume") {
      themeContext?.setOpen(true);
    }
  };

  return (
    <div className={classes.nav_element} onClick={handleClick}>
      <button>{text}</button>
    </div>
  );
};

interface NavElementsProps {
  className?: string;
  navOpen?: boolean;
  setNavOpen?: (value: boolean) => void;
}

interface StyleSpringProps {
  right: any;
}

export const NavElements = forwardRef(
  (
    { className, navOpen, setNavOpen }: NavElementsProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const navElements = [
      { text: "Home", path: "/" },
      { text: "About", path: "/" },
      { text: "Projects", path: "/projects" },
      { text: "Resume", path: null },
    ];

    const handleNavClose = () => {
      if (setNavOpen) {
        setNavOpen(false);
      }
    };

    const springProps: StyleSpringProps = useSpring({
      right: navOpen ? "0vw" : "-45vw",
    });

    const crossIconSpring = useSpring({
      opacity: navOpen ? 1 : 0,
      transform: navOpen ? "scale(1)" : "scale(0)",
      config: { tension: 300, friction: 30 },
    });

    return (
      <>
        <animated.div
          ref={ref}
          style={
            setNavOpen
              ? {
                  ...springProps,
                }
              : undefined
          }
          className={clsx(classes.nav_elements, className)}
        >
          {navOpen === true ? (
            <animated.button
              style={{ ...crossIconSpring }}
              className={classes.nav_close_trigger}
              onClick={handleNavClose}
            >
              <Cross1Icon />
            </animated.button>
          ) : null}

          <FnElements />
          {navElements.map((item, index) => {
            return (
              <NavElement key={index} text={item.text} path={item?.path} />
            );
          })}
        </animated.div>
      </>
    );
  }
);
