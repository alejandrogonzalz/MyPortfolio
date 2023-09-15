import classes from "./resume.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { AppContext } from "../../app/AppContext";
import { useContext } from "react";

export const ResumeDialog = () => {
  const appContext = useContext(AppContext);

  return (
    <Dialog.Root open={appContext?.open} onOpenChange={appContext?.setOpen}>
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
