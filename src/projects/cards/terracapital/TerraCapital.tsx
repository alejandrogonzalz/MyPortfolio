import classes from "./terra.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import * as Separator from "@radix-ui/react-separator";

import { ThemeContext } from "../../../app/themeContext";
import { useContext, useState, useEffect } from "react";
import { clsx } from "clsx";

import HTML5 from "./assets/html5.svg";
import SASS from "./assets/sass.svg";
import REACT from "./assets/react.svg";
import LOGIN from "./assets/GIFS/login.gif";

export const TerraCapitalCard = () => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let content;

  const iconPaths = [
    { icon: HTML5, className: classes.icon_html },
    { icon: SASS, className: classes.icon_sass },
    { icon: REACT, className: classes.icon_react },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth < 760) {
    content = (
      <>
        <div className={classes.top_container}>
          <div className={classes.title_container}>
            <div className={classes.title_wrapper}>
              <h2>TerraCapital</h2>

              <div className={classes.icon_container}>
                <Separator.Root
                  className={classes.separator_vertical_one}
                  decorative
                />
                {iconPaths.map((path, index) => {
                  return (
                    <div className={classes.icon} key={index}>
                      <img
                        src={path.icon}
                        alt={`Icon ${index + 1}`}
                        className={path.className}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <Separator.Root
              className={classes.separator_horizontal}
              decorative
            />
          </div>

          <div className={classes.content_container}>
            <span className={classes.content_text}>
              Dynamic web application aimed at streamlining the financial
              management processes, including invoicing, expense tracking, and
              client portfolio management, for a real estate company. This
              application was built using the React framework, leveraging
              essential libraries such as React Router, Redux Toolkit, and
              TanStack Table.
            </span>
            <button className={classes.button_more}>Read more...</button>
          </div>
        </div>
        <div className={classes.mid_container}>
          <Separator.Root className={classes.separator_horizontal} decorative />

          <div className={classes.chevron_left}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={classes.chevron_right}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>

          <Separator.Root className={classes.separator_vertical} decorative />

          <>
            <Swiper />
          </>

          <Separator.Root
            className={classes.separator_vertical_right}
            decorative
          />
          <Separator.Root className={classes.separator_horizontal} decorative />
        </div>
        <div className={classes.button_container}>
          <button>
            <FontAwesomeIcon icon={faCode} />
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <div className={classes.mid_container}>
        <div className={classes.left_container}>
          <div className={classes.title_container}>
            <h2>TerraCapital</h2>
          </div>
          <div className={classes.content_container}>
            <span className={classes.content_text}>
              Dynamic web application aimed at streamlining the financial
              management processes, including invoicing, expense tracking, and
              client portfolio management, for a real estate company. This
              application was built using the React framework, leveraging
              essential libraries such as React Router, Redux Toolkit, and
              TanStack Table.
            </span>
            <button className={classes.button_more}>Read more...</button>
          </div>
        </div>
        <Separator.Root className={classes.separator_horizontal} decorative />
        <div className={classes.right_container}>
          <div className={classes.icon_container}>
            {iconPaths.map((path, index) => {
              return (
                <div className={classes.icon} key={index}>
                  <img
                    src={path.icon}
                    alt={`Icon ${index + 1}`}
                    className={path.className}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.right_vessel}>
            <div className={classes.chevron_left}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className={classes.chevron_right}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <Swiper />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={clsx(classes.main_container, { [classes.light]: light })}>
      {content}
    </div>
  );
};

const Swiper = () => {
  return (
    <div className={classes.swiper_container}>
      <div className={classes.swiper_item}>
        <h3>Login & authentication</h3>
        <div className={classes.GIF_container}>
          <img src={LOGIN} alt="Login GIF" />
        </div>
        <span>
          Using <strong>JWT tokens</strong> and <strong>HTTP cookies</strong>
        </span>
      </div>
    </div>
  );
};

{
  /* <div className={classes.content_container}>
          <span className={classes.content_text}>
            Dynamic web application aimed at streamlining the financial
            management processes, including invoicing, expense tracking, and
            client portfolio management, for a real estate company. This
            application was built using the React framework, leveraging
            essential libraries such as React Router, Redux Toolkit, and
            TanStack Table.
          </span>
          <button className={classes.button_more}>Read more...</button>
        </div>
        <div className={classes.right_container}>
          <Separator.Root className={classes.separator_vertical} decorative />

          <div className={classes.chevron_left}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <>
            <Swiper />
          </>
          <div className={classes.chevron_right}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div> */
}
