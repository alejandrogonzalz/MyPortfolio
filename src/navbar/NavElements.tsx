import classes from "./navbar.module.scss";
import styles from "./navelements.module.scss";
import { clsx } from "clsx";

import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { Link, useLocation } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

import { AppContext } from "../app/AppContext";
import { useContext, forwardRef, ForwardedRef, useRef } from "react";

import RESUME from "./utilities/assets/resumeEN.png";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

import RESUMEEN from "./utilities/assets/ResumeEnglish.pdf";
import RESUMEES from "./utilities/assets/ResumeSpanish.pdf";

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
    const location = useLocation();
    const appContext = useContext(AppContext);
    const light = appContext?.theme === "light";

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

    const scrollBottom = () => {
      if (location.pathname === "/projects") {
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 0);
      } else {
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 0);
      }
    };
    const scrollTop = () => {
      if (location.pathname === "/") {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      } else {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 0);
      }
    };

    // useEffect(() => {
    //   if (open === "") {
    //     console.log("content", open === "");
    //     console.log(typeof open);
    //   }
    // }, [open]);

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

          <NavigationMenu.Root
            className={clsx(styles.navigation_root, { [styles.light]: light })}
          >
            <NavigationMenu.List className={styles.navigation_list}>
              <NavigationMenu.Item className={styles.nav_element}>
                <Link to="/" onClick={scrollTop}>
                  Home
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={styles.nav_element}>
                <Link to="/" onClick={scrollBottom}>
                  About
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={styles.nav_element}>
                <Link to="/projects" onClick={scrollTop}>
                  Projects
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={styles.nav_element}>
                <ResumeContent />
              </NavigationMenu.Item>
            </NavigationMenu.List>

        
          </NavigationMenu.Root>
        </animated.div>
      </>
    );
  }
);

const ResumeContent = () => {
  const myRef = useRef<HTMLDivElement | null>(null);

  const downloadPDF = (pdfUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = filename;
    link.click();
    link.remove();
  };

  const downloadResumeEN = () => {
    downloadPDF(RESUMEEN, "ResumeEnglish");
  };
  const downloadResumeES = () => {
    downloadPDF(RESUMEES, "ResumeSpanish");
  };

  return (
    <>
      <NavigationMenu.Trigger>
        Resume <CaretDownIcon className={styles.caret_down} aria-hidden />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className={styles.navigation_content} ref={myRef}>
        <div className={styles.content_container}>
          <div className={styles.box_decoration_1} />
          <div className={styles.box_decoration_2} />

          <div className={styles.resume}>
            <div className={styles.custom_border} />
            <img src={RESUME} alt="Resume" />
          </div>
          <div className={styles.download_container}>
            <button onClick={downloadResumeES}>Download (Spanish)</button>
            <button onClick={downloadResumeEN}>Download (English)</button>
          </div>
        </div>
        <NavigationMenu.Indicator className={styles.navigation_indicator}>
          <div className={styles.arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.Content>
    </>
  );
};
