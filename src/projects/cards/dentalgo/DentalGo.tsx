import classes from "./dental.module.scss";

import HTML5 from "./assets/html5.svg";
import SASS from "./assets/sass.svg";
import JS from "./assets/js.svg";

import desktop from "./assets/desktop.png";
import ipad from "./assets/ipad.png";
import phone from "./assets/phone.png";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";

import * as Separator from "@radix-ui/react-separator";
import { AppContext } from "../../../app/AppContext";
import { useContext, useState } from "react";
import { useSpringButton } from "../sharedFX";

import { animated, useSpring } from "@react-spring/web";
import { clsx } from "clsx";

export const DentalGoCard = () => {
  let content, frontContent;
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);
  const [isButtonHoverCode, setIsButtonHoverCode] = useState<boolean>(false);
  const [isButtonHoverWeb, setIsButtonHoverWeb] = useState<boolean>(false);

  const buttonMoreProps = useSpringButton(isButtonHover);
  const buttonCodeProps = useSpringButton(isButtonHoverCode);
  const buttonWebProps = useSpringButton(isButtonHoverWeb);

  const iconPaths = [{ icon: HTML5 }, { icon: SASS }, { icon: JS }];

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 75 },
  });

  const ButtonMore = (
    <animated.button
      className={classes.button_code}
      style={{ ...buttonMoreProps }}
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

  const ButtonCode = (
    <animated.button
      style={{ ...buttonCodeProps }}
      className={classes.button_code}
      onMouseEnter={() => setIsButtonHoverCode(true)}
      onMouseLeave={() => setIsButtonHoverCode(false)}
      onFocus={() => setIsButtonHoverCode(true)}
      onBlur={() => setIsButtonHoverCode(false)}
      onClick={() => {
        window.open("https://github.com/alejandrogonzalz/DentalGo");
      }}
    >
      <FontAwesomeIcon icon={faCode} /> Code
    </animated.button>
  );
  const ButtonWeb = (
    <animated.button
      style={{ ...buttonWebProps }}
      className={classes.button_code}
      onMouseEnter={() => setIsButtonHoverWeb(true)}
      onMouseLeave={() => setIsButtonHoverWeb(false)}
      onFocus={() => setIsButtonHoverWeb(true)}
      onBlur={() => setIsButtonHoverWeb(false)}
      onClick={() => {
        window.open(
          "https://alejandrogonzalz.github.io/dentalgo.github.io/",
          "_blank"
        );
      }}
    >
      <FontAwesomeIcon icon={faGlobe} /> Website
    </animated.button>
  );

  content = (
    <>
      <div className={classes.top_container}>
        <button
          className={classes.back_button}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <ArrowTopRightIcon />
        </button>
        <div className={classes.left_container}>
          <div className={classes.title}>
            <h1>DentalGo</h1>
          </div>
          <Separator.Root className={classes.separator_horizontal} decorative />
          <div className={classes.content_container}>
            <div className={classes.content_text}>
              <strong>Static website</strong> crafted using HTML, CSS, and
              JavaScript that serves as an online platform for a{" "}
              <strong>dental office</strong>. It represents my initial foray
              into web development, primarily aimed at honing my skills in HTML
              and CSS. Consequently, the website maintains a straightforward and
              clean design
            </div>
          </div>
          <Separator.Root className={classes.separator_horizontal} decorative />
        </div>

        <div className={classes.right_container}>
          <div className={classes.icon_container}>
            {iconPaths.map((path, index) => {
              return (
                <div className={classes.icon} key={index}>
                  <img
                    src={path.icon}
                    alt={`Icon ${index + 1}`}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.bottom_container}>
        <div className={classes.img_container}>
          <div className={classes.desktop}>
            <img
              src={desktop}
              alt="Desktop dentalgo website"
              draggable={false}
              loading="lazy"
            />
          </div>
          <div className={classes.tablet}>
            <img
              src={ipad}
              alt="Tablet dentlago website"
              draggable={false}
              loading="lazy"
            />
          </div>
          <div className={classes.mobile}>
            <img
              src={phone}
              alt="Mobile dentalgo website"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>

        <div className={classes.button_container}>
          {ButtonCode}
          {ButtonWeb}
        </div>
      </div>
    </>
  );

  frontContent = (
    <>
      <div className={classes.front_container}>
        <h1 className={classes.title}>DentalGo</h1>
        <div className={classes.button_container}>
          {ButtonCode}
          {ButtonWeb}
          {ButtonMore}
        </div>
      </div>
      <div className={classes.circle} />
      <div className={classes.circle_2} />
    </>
  );
  return (
    <>
      <animated.div
        className={clsx(classes.main_container, classes.front, {
          [classes.light]: light,
        })}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          zIndex: isFlipped ? 5 : 6,
        }}
      >
        {frontContent}
      </animated.div>
      <animated.div
        className={clsx(classes.main_container, {
          [classes.light]: light,
        })}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
          zIndex: isFlipped ? 6 : 5,
        }}
      >
        {content}
      </animated.div>
    </>
  );
};
