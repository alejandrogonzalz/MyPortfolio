import classes from "./landing.module.scss";
import { VLine, HLine } from "../shared/lines";
import { HoverComponent } from "./carousel/HoverCard";

import JS from "./svg/js.svg";
import HTML5 from "./svg/html5.svg";
import CSS from "./svg/css3.svg";
import SASS from "./svg/sass.svg";
import NODEJS from "./svg/node.svg";
import REACT from "./svg/react.svg";

export const Landing = () => {
  const iconPaths = [
    { icon: JS, className: classes.icon_javascript },
    { icon: HTML5, className: classes.icon_html },
    { icon: CSS, className: classes.icon_css },
    { icon: SASS, className: classes.icon_sass },
    { icon: NODEJS, className: classes.icon_nodejs },
    { icon: REACT, className: classes.icon_react },
  ];

  return (
    <div className={classes.landing__page}>
      <VLine className={classes.vertical_line} />
      <HLine className={classes.horizontal_line_1} />
      <div className={classes.top_container}>
        <HoverComponent />
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

      <div className={classes.middle_container}>
        <div>
          Currently studying B.S. in Nanotechnology Engineering I’m a Front-End
          React Developer looking forward to be a Fullstack Developer.
        </div>
        <div className={classes.icon_container}>
          <span className={classes.text}>Tech Stack</span>
          <span>
            <VLine className={classes.line} />
          </span>
          {iconPaths.map((path, index) => {
            return (
              <div className={classes.icon} key={index}>
                <img
                  src={path.icon}
                  alt={`Icon ${index + 1}`}
                  className={path.className}
                />
              </div>
            );
          })}
        </div>
      </div>

      <HLine className={classes.horizontal_line_full} />
      <div className={classes.bottom_container}>
        <span>
          <strong>"Our value</strong> increases <br />
          the more <strong>we learn"</strong>
        </span>
      </div>
      <HLine className={classes.horizontal_line_full} />
    </div>
  );
};
