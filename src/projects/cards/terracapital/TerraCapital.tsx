import classes from "./terra.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import * as Separator from "@radix-ui/react-separator";

import { AppContext, useScreenWidth } from "../../../app/AppContext";
import { useContext, useState } from "react";
import { clsx } from "clsx";
import { Slider } from "./Slider";
import { useSpringButton } from "../sharedFX";

import { animated, useSpring } from "@react-spring/web";

import HTML5 from "./assets/html5.svg";
import SASS from "./assets/sass.svg";
import REACT from "./assets/react.svg";
import { ArrowBottomLeftIcon } from "@radix-ui/react-icons";

export const TerraCapitalCard = () => {
  const appContext = useContext(AppContext);

  const [index, setIndex] = useState<number>(0);
  const [clicked, setClicked] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);
  const [isButtonCodeHover, setIsButtonCodeHover] = useState<boolean>(false);

  const light = appContext?.theme === "light";
  const screenWidth = useScreenWidth();

  const buttonMoreProps = useSpringButton(isButtonHover);
  const buttonCodeProps = useSpringButton(isButtonCodeHover);

  const iconPaths = [{ icon: HTML5 }, { icon: SASS }, { icon: REACT }];

  const nextSlide = () => {
    setIndex((prevState) => (prevState + 1) % 4);
    setClicked("right");
  };

  const prevSlide = () => {
    setIndex((prevState) => {
      const newIndex = (prevState - 1 + 4) % 4;
      return newIndex;
    });
    setClicked("left");
  };

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
      className={classes.button_code}
      style={{ ...buttonCodeProps }}
      onMouseEnter={() => setIsButtonCodeHover(true)}
      onMouseLeave={() => setIsButtonCodeHover(false)}
      onFocus={() => setIsButtonCodeHover(true)}
      onBlur={() => setIsButtonCodeHover(false)}
    >
      <FontAwesomeIcon icon={faCode} /> Code
    </animated.button>
  );

  let content, frontContent;
  if (screenWidth < 760) {
    content = (
      <>
        <div className={classes.top_container}>
          <div className={classes.title_container}>
            <div className={classes.title_wrapper}>
              <h1>TerraCapital</h1>

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
                        draggable={false}
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
              Dynamic web application aimed at streamlining the{" "}
              <strong>financial management processes</strong>, including
              invoicing, expense tracking, and client portfolio management, for
              a real estate company. This application was built using the{" "}
              <strong>React framework</strong>, leveraging essential libraries
              such as React Router, Redux Toolkit, and TanStack Table.
            </span>
          </div>
        </div>
        <div className={classes.slider_container}>
          <Separator.Root className={classes.separator_horizontal} decorative />

          <div className={classes.chevron_left} onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={classes.chevron_right} onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>

          <Separator.Root className={classes.separator_vertical} decorative />

          <>
            <Slider
              index={index}
              setIndex={setIndex}
              clicked={clicked}
              setClicked={setClicked}
            />
          </>

          <Separator.Root
            className={classes.separator_vertical_right}
            decorative
          />
          <Separator.Root className={classes.separator_horizontal} decorative />
        </div>
        <div className={classes.button_container}>{ButtonCode}</div>
        <button
          className={classes.back_button}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <ArrowBottomLeftIcon />
        </button>
      </>
    );
  } else {
    content = (
      <div className={classes.card_container_laptop}>
        <div className={classes.left_container}>
          <div className={classes.title_container}>
            <h1>TerraCapital</h1>
          </div>
          <Separator.Root className={classes.separator_horizontal} decorative />
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
          <Separator.Root className={classes.separator_horizontal} decorative />
          <div className={classes.content_container}>
            <div className={classes.content_text}>
              Dynamic web application aimed at streamlining the{" "}
              <strong>financial management processes</strong>, including
              invoicing, expense tracking, and client portfolio management, for
              a real estate company. This application was built using the{" "}
              <strong>React framework</strong>, leveraging essential libraries
              such as React Router, Redux Toolkit, and TanStack Table.
            </div>

            <div className={classes.button_container_large}>{ButtonCode}</div>
          </div>
          <button
            className={classes.back_button}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <ArrowBottomLeftIcon />
          </button>
          <Separator.Root className={classes.separator_vertical} decorative />
        </div>

        <div className={classes.right_container}>
          <Slider
            index={index}
            setIndex={setIndex}
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
      </div>
    );
  }

  frontContent = (
    <>
      <div className={classes.front_container}>
        <h1 className={classes.title}>TerraCapital</h1>
        <div className={classes.button_container}>
          {ButtonCode}
          {ButtonMore}
        </div>
      </div>
      <div className={classes.triangle} />
      <div className={classes.triangle_2} />
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
