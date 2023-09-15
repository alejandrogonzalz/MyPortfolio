import classes from "./resume.module.scss";
import {clsx} from "clsx";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import resumeEN from './assets/resumeEN.png';
import resumeES from './assets/resumeES.png';


import { AppContext } from "../../app/AppContext";
import { useContext } from "react";
import * as Separator from '@radix-ui/react-separator';



export const ResumeDialog = () => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === 'light'

  return (
    <Dialog.Root open={appContext?.open} onOpenChange={appContext?.setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={clsx(classes.content, {[classes.light]: light})}>

          <div className={classes.main_container}>
            <h2 className={classes.title}>Resume</h2>
            <Separator.Root className={classes.separator_horizontal} decorative orientation="horizontal"/>
            <div className={classes.doc_container}>
                <div className={classes.resume_EN_container}>
                  <div className={classes.resume_EN}><img src={resumeEN} alt="Resume english canva"/></div>

                  <div className={classes.button_container}>'
                    <button>Download</button>
                    <button>View</button>
                  </div>
                </div>

                <Separator.Root className={classes.separator_cv} decorative />


                <div className={classes.resume_ES_container}>
                  <div className={classes.resume_EN}><img src={resumeES} alt="Resume english canva"/></div>

                  <div className={classes.button_container}><button>Download</button>
                    <button>View</button></div>                
                  </div>
            </div>
          </div>
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
