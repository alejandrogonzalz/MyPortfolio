import classes from "./carousel.module.scss";
import { useSpring, animated } from "@react-spring/web";

interface CarouselItemProps {
  item: string;
}

export const CarouselItem = ({ item }: CarouselItemProps) => {
  const animation = useSpring({
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
    from: { opacity: 0, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <animated.div style={animation} className={classes.carousel_item}>
      <img src={item} />
    </animated.div>
  );
};
