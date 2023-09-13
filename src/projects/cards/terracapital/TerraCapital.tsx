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
import { Slider } from "./Slider";

import { animated, useSpring } from "@react-spring/web";

import HTML5 from "./assets/html5.svg";
import SASS from "./assets/sass.svg";
import REACT from "./assets/react.svg";

export const TerraCapitalCard = () => {
  const themeContext = useContext(ThemeContext);
  const [index, setIndex] = useState<number>(0);
  const [clicked, setClicked] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);

  const light = themeContext?.theme === "light";
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let content;

  const iconPaths = [{ icon: HTML5 }, { icon: SASS }, { icon: REACT }];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setIndex((prevState) => (prevState + 1) % 3);
    setClicked("right");
  };

  const prevSlide = () => {
    setIndex((prevState) => {
      const newIndex = (prevState - 1 + 3) % 3;
      return newIndex;
    });
    setClicked("left");
  };

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 75 },
  });

  const buttonHoverProps = useSpring({
    transform: isButtonHover ? "scale(1.15)" : "scale(1)",
    config: { tension: 400, friction: 15 }, // Adjust the values as needed for your desired bounce effect
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
                      <img src={path.icon} alt={`Icon ${index + 1}`} />
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
            {ButtonMore}
          </div>
        </div>
        <div className={classes.mid_container}>
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
        <div className={classes.button_container}>
          <button>
            <FontAwesomeIcon icon={faCode} /> Code
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
            {ButtonMore}
          </div>
        </div>
        <Separator.Root className={classes.separator_horizontal} decorative />
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
          <div className={classes.right_vessel}>
            <Slider
              index={index}
              setIndex={setIndex}
              clicked={clicked}
              setClicked={setClicked}
            />
          </div>
        </div>
      </div>
    );
  }
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
