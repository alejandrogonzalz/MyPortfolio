import classes from "./switcher.module.scss";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeContext } from "../../app/ThemeContext";
import { useContext } from "react";
import clsx from "clsx";

export const ThemeSwitch = ({ ...props }) => {
  const themeContext = useContext(ThemeContext);

  const handleChecked = () => {
    themeContext?.setTheme((prevTheme: any) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  };

  let content;
  content =
    themeContext && themeContext?.theme === "dark" ? <SunIcon /> : <MoonIcon />;

  // useEffect(() => {
  //   console.log(themeContext?.theme);
  // }, [themeContext?.theme]);

  return (
    <label htmlFor={props.id} className={classes.switch_container}>
      <SwitchPrimitive.Root
        className={classes.switch_root}
        id={props.id}
        onCheckedChange={handleChecked}
        checked={themeContext?.theme === "light"}
      >
        <SwitchPrimitive.Thumb className={classes.switch_thumb} />
      </SwitchPrimitive.Root>
      <div
        className={clsx(classes.icon, {
          [classes.light]: themeContext?.theme === "light",
        })}
      >
        {content}
      </div>
    </label>
  );
};
