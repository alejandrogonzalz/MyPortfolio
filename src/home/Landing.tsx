import classes from "./landing.module.scss";
import { VLine, HLine } from "../shared/lines";
import { HoverComponent } from "./hovercard/HoverCard";
import { ArrowDownIcon } from "@radix-ui/react-icons";

import { AppContext } from "../app/AppContext";
import { useContext, useState } from "react";
import { clsx } from "clsx";
import { useSpring, animated } from "@react-spring/web";

import JS from "./svg/js.svg";
import HTML5 from "./svg/html5.svg";
import CSS from "./svg/css3.svg";
import SASS from "./svg/sass.svg";
import NODEJS from "./svg/node.svg";
import REACT from "./svg/react.svg";

export const Landing = () => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";
  const [arrowHover, setArrowHover] = useState<boolean>();

  const animation = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: [{ transform: "translateX(0%)", opacity: 1 }],
    config: {
      tension: 280,
      friction: 22,
      duration: 200,
    },
  });

  const iconPaths = [
    { icon: JS, className: classes.icon_javascript },
    { icon: HTML5, className: classes.icon_html },
    { icon: CSS, className: classes.icon_css },
    { icon: SASS, className: classes.icon_sass },
    { icon: NODEJS, className: classes.icon_nodejs },
    { icon: REACT, className: classes.icon_react },
  ];

  const springArrowProps = useSpring({
    transform: arrowHover ? "scale(1.15)" : "scale(1)",
    config: { tension: 300, friction: 30 },
  });

  return (
    <animated.div className={classes.landing__page} style={animation}>
      <VLine className={classes.vertical_line} />

      <HLine className={classes.horizontal_line_1} />

      <animated.div className={classes.top_container}>
        <HoverComponent />
      </animated.div>

      <HLine className={classes.horizontal_line_2}>
        <div className={classes.name_container}>
          <div className={classes.name_wrapper}>
            <h1>Alejandro</h1>
            <h2>Gonzalez</h2>
            <h3>Almazan</h3>
          </div>
        </div>
      </HLine>

      <div className={classes.middle_container}>
        <div className={classes.biography}>
          Experienced Full-Stack Developer proficient in React, Next.js, and
          backend ORM frameworks such as Java SpringBoot and NestJS, with one
          year of hands-on expertise.
        </div>
        <div className={classes.icon_container}>
          <span className={classes.text}>Tech Stack</span>
          <span>
            <VLine className={classes.line} />
          </span>
          <div className={classes.icon_wrapper}>
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
      </div>

      <div className={clsx(classes.circle1, { [classes.light]: light })} />
      <div className={clsx(classes.circle2, { [classes.light]: light })} />

      <HLine className={classes.horizontal_line_full} />
      <div
        className={clsx(classes.bottom_container, {
          [classes.bottom_container_light]: light,
        })}
      >
        <span>
          <strong>"Our value</strong> increases <br />
          the more <strong>we learn"</strong>
        </span>
        <div className={clsx(classes.circle3, { [classes.light]: light })} />
      </div>
      <HLine className={classes.horizontal_line_full} />

      <animated.div
        style={{ ...springArrowProps }}
        onMouseEnter={() => setArrowHover(true)}
        onMouseLeave={() => setArrowHover(false)}
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        className={clsx(classes.arrow_down, { [classes.light]: light })}
      >
        <ArrowDownIcon />
      </animated.div>
    </animated.div>
  );
};
