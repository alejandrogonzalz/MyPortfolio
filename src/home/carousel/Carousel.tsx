import classes from "./carousel.module.scss";
import { CarouselItem } from "./CarouselItem";
import pic0 from "./pictures/pic0.jpg";
import pic1 from "./pictures/pic1.jpg";
import pic2 from "./pictures/pic2.jpg";
import pic3 from "./pictures/pic3.jpg";

import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

export const Carousel = () => {
  const items = [pic0, pic1, pic2, pic3];

  const [index, setIndex] = useState(0);

  const transitions = useTransition(items[index], {
    from: { opacity: 0, transform: "translate3d(100px, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100px, 0, 0)" },
  });

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className={classes.carousel_container}>
      {items.map((item, index) => (
        <animated.div key={index}>
          <CarouselItem item={item} />
        </animated.div>
      ))}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};
