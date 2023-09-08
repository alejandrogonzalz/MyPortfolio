import classes from "./resume.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { ThemeContext } from "../../app/ThemeContext";
import { useContext } from "react";

export const ResumeDialog = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Dialog.Root open={themeContext?.open} onOpenChange={themeContext?.setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.content}>
          <div>jajaj</div>
          <Dialog.Close asChild>
            <button className={classes.close}>
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
