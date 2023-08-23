import { useEffect, useState } from "react";
import classes from "./switcher.module.scss";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const ThemeSwitch = ({ ...props }) => {
  const [checked, setChecked] = useState("dark");
  let content;

  const handleChecked = () => {
    setChecked((prevChecked) => (prevChecked === "dark" ? "light" : "dark"));
  };

  content = checked === "dark" ? <SunIcon /> : <MoonIcon />;

  return (
    <label htmlFor={props.id} className={classes.switch_container}>
      <SwitchPrimitive.Root
        className={classes.switch_root}
        id={props.id}
        onCheckedChange={handleChecked}
        checked={checked === "light"} // Make sure to pass the checked prop to your switch library
      >
        <SwitchPrimitive.Thumb className={classes.switch_thumb} />
      </SwitchPrimitive.Root>
      <div className={classes.icon}>{content}</div>
    </label>
  );
};
