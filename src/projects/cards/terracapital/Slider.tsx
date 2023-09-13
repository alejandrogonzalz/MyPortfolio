import classes from "./slider.module.scss";

import LOGIN from "./assets/GIFS/login.gif";
import CREATE from "./assets/GIFS/createClient.gif";
import TABLEFX from "./assets/GIFS/tableFunctionalities.gif";

import { useEffect, Dispatch, SetStateAction } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  // faCode,
} from "@fortawesome/free-solid-svg-icons";

interface SliderI {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;

  clicked: string | null;
  setClicked: Dispatch<SetStateAction<string | null>>;
}

export const Slider = ({ index, setIndex, clicked, setClicked }: SliderI) => {
  const slides = [FirstSlide, SecondSlide, ThirdSlide];
  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,

    from: {
      opacity: 0,
      transform: `translate3d(${clicked === "left" ? "-100%" : "100%"},0,0)`,
    },

    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: `translate3d(${clicked === "left" ? "50%" : "-50%"},0,0)`,
    },

    config: { duration: 200 },
    initial: null,
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

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

  const bind = useDrag(
    (state) => {
      const { down, movement } = state;

      // Add a threshold for stronger movement (e.g., 20 pixels)
      const threshold = 20;
      const xMovement = movement[0];

      // Only trigger the animation when the user releases the drag (not during the drag)
      if (!down && Math.abs(xMovement) > threshold) {
        if (xMovement > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    },
    {
      delay: true, // Add a delay before starting the gesture detection
      filterTaps: true, // Filter out taps (single quick touches) to prevent unintentional swipes
    }
  );

  return (
    <div
      className={classes.swiper}
      {...bind()}
      style={{ touchAction: "none" }} // Add this line
    >
      {transitions((style, index) => {
        const SlideElement = slides[index];
        return (
          <animated.div style={style} className={classes.swiper_slide}>
            <SlideElement />
          </animated.div>
        );
      })}
      <div className={classes.button_container}>
        <div className={classes.chevron_left} onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={classes.chevron_right} onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

const FirstSlide = () => {
  return (
    <div className={classes.first_slide}>
      <h3 className={classes.title}>Login & authentication</h3>
      <div className={classes.GIF_container}>
        <img src={LOGIN} alt="Login GIF" draggable={false} />
      </div>
      <span>
        Using <strong>JWT tokens</strong> and <strong>HTTP cookies</strong>
      </span>
    </div>
  );
};

const SecondSlide = () => {
  return (
    <div className={classes.first_slide}>
      <h3 className={classes.title}>REST services consumption</h3>
      <div className={classes.GIF_container}>
        <img src={CREATE} alt="Login GIF" draggable={false} />
      </div>
      <span>
        Using <strong>JWT tokens</strong> and <strong>HTTP cookies</strong>
      </span>
    </div>
  );
};

const ThirdSlide = () => {
  return (
    <div className={classes.first_slide}>
      <h3 className={classes.title}>Table functionalities</h3>
      <div className={classes.GIF_container}>
        <img src={TABLEFX} alt="Login GIF" draggable={false} />
      </div>
      <span>
        Using <strong>JWT tokens</strong> and <strong>HTTP cookies</strong>
      </span>
    </div>
  );
};
