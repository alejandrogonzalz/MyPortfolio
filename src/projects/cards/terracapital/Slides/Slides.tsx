import classes from "./slides.module.scss";
import { clsx } from "clsx";

import LOGIN from "../assets/GIFS/login.gif";
import TABLEFX from "../assets/GIFS/tableFX.gif";

import LAPSALE from "../assets/second/lapSale.png";

import clientScreen from "../assets/second/clientScreen.png";
import newContract from "../assets/second/newContract.png";
import contractAdded from "../assets/second/contractAdded.png";
import toApprove from "../assets/second/toApprove.png";

import REDUX from "../assets/redux.png";

import * as Separator from "@radix-ui/react-separator";
import { useContext } from "react";
import { useScreenWidth, AppContext } from "../../../../app/AppContext";

export const FirstSlide = () => {
  const appContext = useContext(AppContext);
  const screenWidth = useScreenWidth();

  const light = appContext?.theme === "light";

  let content;

  if (screenWidth < 760) {
    content = (
      <div className={clsx(classes.first_slide, { [classes.light]: light })}>
        <div>
          <div className={classes.title}>
            <h3>Login & authentication</h3>
          </div>
          <span className={classes.text_container}>
            Using <strong>JWT tokens</strong> and <strong>HTTP cookies</strong>
          </span>
        </div>
        <div className={classes.GIF_container}>
          <img src={LOGIN} alt="Login GIF" draggable={false} />
        </div>
      </div>
    );
  } else {
    content = (
      <div className={clsx(classes.first_slide, { [classes.light]: light })}>
        <div className={classes.GIF_container}>
          <img src={LOGIN} alt="Login GIF" draggable={false} />
        </div>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>
              Login & <br />
              authentication
            </h3>
          </div>
          <Separator.Root className={classes.separator_horizontal} decorative />

          <span className={classes.text_container}>
            Using <strong>JWT tokens</strong> and <strong>HTTP cookies</strong>
          </span>
        </div>
      </div>
    );
  }

  return content;
};

export const SecondSlide = () => {
  const appContext = useContext(AppContext);
  const screenWidth = useScreenWidth();

  const light = appContext?.theme === "light";

  let content;

  if (screenWidth < 760) {
    content = (
      <div className={clsx(classes.second_slide, { [classes.light]: light })}>
        <div className={classes.container_mobile}>
          <div className={classes.title}>
            <h3>
              Rest <br />
              Service <br />
              consumption
            </h3>
          </div>

          <span className={classes.text_container}>
            Efficiently handling <strong>CRUD operations</strong> and{" "}
            <strong>API interactions</strong> with RTK Query for cache
            management and data integrity
          </span>
        </div>

        <div className={classes.laptop_sale}>
          <img src={LAPSALE} alt="Sale screen in laptop" draggable={false} />
        </div>
      </div>
    );
  } else {
    content = (
      <div className={clsx(classes.second_slide, { [classes.light]: light })}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>
              Rest <br />
              Service <br />
              consumption
            </h3>
          </div>

          <Separator.Root className={classes.separator_horizontal} decorative />

          <span className={classes.text_container}>
            Efficiently handling <strong>CRUD operations</strong> and{" "}
            <strong>API interactions</strong> with RTK Query for cache
            management and data integrity
          </span>
        </div>

        <div className={classes.laptop_sale}>
          <img src={LAPSALE} alt="Sale screen in laptop" draggable={false} />
        </div>

        <div className={classes.screens_container}>
          <div className={classes.one_screen}>
            <img
              src={clientScreen}
              alt="Sale screen in laptop"
              draggable={false}
            />
          </div>
          <div className={classes.two_screen}>
            <img
              src={contractAdded}
              alt="Sale screen in laptop"
              draggable={false}
            />
          </div>
          <div className={classes.three_screen}>
            <img
              src={newContract}
              alt="Sale screen in laptop"
              draggable={false}
            />
          </div>
          <div className={classes.four_screen}>
            <img
              src={toApprove}
              alt="Sale screen in laptop"
              draggable={false}
            />
          </div>
          <div className={classes.five_screen}>
            <img
              src={toApprove}
              alt="Sale screen in laptop"
              draggable={false}
            />
          </div>
          <div className={classes.six_screen}>
            <img
              src={toApprove}
              alt="Sale screen in laptop"
              draggable={false}
            />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export const ThirdSlide = () => {
  const appContext = useContext(AppContext);
  const screenWidth = useScreenWidth();

  const light = appContext?.theme === "light";

  let content;

  if (screenWidth < 760) {
    content = (
      <div className={clsx(classes.third_slide, { [classes.light]: light })}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Redux Toolkit Management</h3>
          </div>

          <div className={classes.col_container}>
            <span className={classes.text_container}>
              In our application, Redux Toolkit plays a central role to
              efficiently manage the application's state, making it easier to
              track changes, handle authentication, and ensure a consistent user
              experience throughout the app.
            </span>
          </div>
        </div>

        <div className={classes.redux_img}>
          <img src={REDUX} alt="Sale screen in laptop" draggable={false} />
        </div>
      </div>
    );
  } else {
    content = (
      <div className={clsx(classes.third_slide, { [classes.light]: light })}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Redux Toolkit Management</h3>
          </div>

          <Separator.Root className={classes.separator_horizontal} decorative />

          <div className={classes.col_container}>
            <div className={classes.redux_img}>
              <img src={REDUX} alt="Sale screen in laptop" draggable={false} />
            </div>

            <Separator.Root className={classes.separator_vertical} decorative />
            <span className={classes.text_container}>
              In our application, Redux Toolkit plays a central role to
              efficiently manage the application's state, making it easier to
              track changes, handle authentication, and ensure a consistent user
              experience throughout the app.
            </span>
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export const FourthSlide = () => {
  const appContext = useContext(AppContext);
  const screenWidth = useScreenWidth();

  const light = appContext?.theme === "light";

  let content;

  if (screenWidth < 760) {
    content = (
      <div className={clsx(classes.first_slide, { [classes.light]: light })}>
        <div>
          <div className={classes.title}>
            <h3>Login & authentication</h3>
          </div>
          <span className={classes.text_container}>
            Using <strong>JWT tokens</strong> and <strong>HTTP cookies</strong>
          </span>
        </div>
        <div className={classes.GIF_container}>
          <img src={LOGIN} alt="Login GIF" draggable={false} />
        </div>
      </div>
    );
  } else {
    content = (
      <div className={clsx(classes.fourth_slide, { [classes.light]: light })}>
        <div className={classes.container}>
          <div className={classes.col_container}>
            <div className={classes.title}>
              <h3>Table functionalities</h3>
              <Separator.Root
                className={classes.separator_horizontal}
                decorative
              />
            </div>
            <Separator.Root className={classes.separator_vertical} decorative />
            <span className={classes.text_container}>
              In our application, <strong>Redux Toolkit</strong> plays a central
              role to efficiently manage the application's state, making it
              easier to track changes, handle authentication, and ensure a
              consistent user experience throughout the app.
            </span>
          </div>

          <div className={classes.redux_img}>
            <img src={TABLEFX} alt="Sale screen in laptop" draggable={false} />
          </div>
        </div>
      </div>
    );
  }
  return content;
};
