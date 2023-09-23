import classes from "./slider.module.scss";
import { clsx } from "clsx";

import {
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  FourthSlide,
} from "./Slides/Slides";

import { Dispatch, SetStateAction, useState, useContext } from "react";
import { useTransition, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../../../app/AppContext";

interface SliderI {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;

  clicked: string | null;
  setClicked: Dispatch<SetStateAction<string | null>>;
}

export const Slider = ({ index, setIndex, clicked, setClicked }: SliderI) => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";
  const slides = [SecondSlide, FirstSlide, ThirdSlide, FourthSlide];
  const [active, setActive] = useState([
    { id: 0, value: false },
    { id: 1, value: false },
  ]);

  const getActive = (id: number) => {
    const state = active.find((item) => item.id === id);
    return state ? state.value : null;
  };

  const updateActive = (id: number, newState: boolean) => {
    setActive((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, value: newState };
        }
        return item;
      });
    });
  };

  const transitions = useTransition(index, {
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

  const nextSlide = () => {
    setIndex((prevState) => (prevState + 1) % 4);
    setClicked("right");
    // updateActive(1, true);
  };
  const prevSlide = () => {
    setIndex((prevState) => {
      const newIndex = (prevState - 1 + 4) % 4;
      return newIndex;
    });
    setClicked("left");
    // updateActive(0, true);
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
      className={clsx(classes.swiper, { [classes.light]: light })}
      {...bind()}
      style={{ touchAction: "none" }}
    >
      {transitions((style, index) => {
        const SlideElement = slides[index];
        return (
          <animated.div style={style} className={classes.swiper_slide}>
            <SlideElement />
          </animated.div>
        );
      })}
      <button
        className={clsx(classes.chevron_left, {
          [classes.active]: getActive(0),
        })}
        onClick={prevSlide}
        onBlur={() => updateActive(0, false)}
        onMouseEnter={() => updateActive(0, true)}
        onMouseLeave={() => updateActive(0, false)}
        onTouchStart={() => updateActive(0, true)}
        onTouchEnd={() => updateActive(0, false)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={clsx(classes.chevron_right, {
          [classes.active]: getActive(1),
        })}
        onClick={nextSlide}
        onBlur={() => updateActive(1, false)}
        onMouseEnter={() => updateActive(1, true)}
        onMouseLeave={() => updateActive(1, false)}
        onTouchStart={() => updateActive(1, true)}
        onTouchEnd={() => updateActive(1, false)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
