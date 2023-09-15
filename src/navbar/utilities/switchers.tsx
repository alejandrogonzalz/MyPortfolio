import classes from "./switcher.module.scss";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { AppContext } from "../../app/AppContext";
import { useContext } from "react";
import clsx from "clsx";

export const ThemeSwitch = ({ ...props }) => {
  const appContext = useContext(AppContext);

  const handleChecked = () => {
    appContext?.setTheme((prevTheme: any) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  };

  let content;
  content =
    appContext && appContext?.theme === "dark" ? <SunIcon /> : <MoonIcon />;

  // useEffect(() => {
  //   console.log(themeContext?.theme);
  // }, [themeContext?.theme]);

  return (
    <label htmlFor={props.id} className={classes.switch_container}>
      <SwitchPrimitive.Root
        className={classes.switch_root}
        id={props.id}
        onCheckedChange={handleChecked}
        checked={appContext?.theme === "light"}
      >
        <SwitchPrimitive.Thumb className={classes.switch_thumb} />
      </SwitchPrimitive.Root>
      <div
        className={clsx(classes.icon, {
          [classes.light]: appContext?.theme === "light",
        })}
      >
        {content}
      </div>
    </label>
  );
};
