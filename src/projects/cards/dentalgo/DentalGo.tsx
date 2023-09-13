import classes from "./dental.module.scss";

import HTML5 from "./assets/html5.svg";
import SASS from "./assets/sass.svg";
import JS from "./assets/js.svg";

import * as Separator from "@radix-ui/react-separator";
import { ThemeContext } from "../../../app/themeContext";
import { useContext, useState } from "react";

import { animated, useSpring } from "@react-spring/web";
import { clsx } from "clsx";

export const DentalGoCard = () => {
  let content;
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);

  const iconPaths = [{ icon: HTML5 }, { icon: SASS }, { icon: JS }];

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 75 },
  });

  const buttonHoverProps = useSpring({
    transform: isButtonHover ? "scale(1.15)" : "scale(1)",
    config: { tension: 400, friction: 15 },
  });

  const ButtonMore = (
    <animated.button
      className={classes.button_more}
      style={{ ...buttonHoverProps }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsButtonHover(true)}
      onMouseLeave={() => setIsButtonHover(false)}
      onFocus={() => setIsButtonHover(true)}
      onBlur={() => setIsButtonHover(false)}
    >
      <span>Read more</span>
      <animated.span>...</animated.span>
    </animated.button>
  );

  content = (
    <>
      <div className={classes.top_container}>
        <div className={classes.left_container}>
          <h2 className={classes.title}>DentalGo</h2>
          <Separator.Root className={classes.separator_horizontal} decorative />
          <div className={classes.content_container}>
            <span className={classes.content_text}>
              This project is a static website developed using HTML, CSS, and
              JavaScript. It serves as a platform for a dental office. It was my
              first project and my goal here was to practice my HTML and CSS, so
              its pretty simple
            </span>
            {ButtonMore}
          </div>
          <Separator.Root className={classes.separator_horizontal} decorative />
        </div>

        <div className={classes.right_container}>
          <div className={classes.icon_container}>
            {iconPaths.map((path, index) => {
              return (
                <div className={classes.icon} key={index}>
                  <img src={path.icon} alt={`Icon ${index + 1}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={classes.bottom_container}>xd</div>
    </>
  );

  return (
    <>
      <animated.div
        className={clsx(classes.main_container, { [classes.light]: light })}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          zIndex: isFlipped ? 5 : 6,
        }}
      >
        {content}
      </animated.div>
      <animated.div
        className={clsx(classes.main_container, classes.back, {
          [classes.light]: light,
        })}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
          zIndex: isFlipped ? 6 : 5,
        }}
      >
        {ButtonMore}
      </animated.div>
    </>
  );
};
