import classes from "./landing.module.scss";
import { VLine, HLine } from "../shared/lines";
import { Carousel } from "./carousel/Carousel";

export const Landing = () => {
  return (
    <>
      <div className={classes.landing_page}>
        <VLine className={classes.vertical_line} />
        <HLine className={classes.horizontal_line_1} />
        <div className={classes.top_container}>
          <Carousel />
        </div>
        <HLine className={classes.horizontal_line_2}>
          <div className={classes.name_container}>
            <div className={classes.name_wrapper}>
              <h1>Alejandro</h1>
              <h2>Gonzalez</h2>
              <h3>Almazan</h3>
            </div>
          </div>
        </HLine>

        <div className={classes.middle_container}>Here we go...</div>

        <HLine className={classes.horizontal_line_full} />
        <div className={classes.bottom_container}>
          <span>
            <strong>"Our value</strong> increases <br />
            the more <strong>we learn"</strong>
          </span>
        </div>
        <HLine className={classes.horizontal_line_full} />
      </div>
    </>
  );
};
