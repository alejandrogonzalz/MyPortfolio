import { useSpring } from "@react-spring/web";

export const useSpringButton = (isButtonHover: boolean) => {
  const buttonHoverProps = useSpring({
    transform: isButtonHover ? "scale(1.15)" : "scale(1)",
    config: { tension: 400, friction: 15 },
  });
  return buttonHoverProps;
};
