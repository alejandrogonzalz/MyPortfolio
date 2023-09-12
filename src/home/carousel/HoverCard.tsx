import classes from "./hovercard.module.scss";
import pic0 from "./pictures/pic0.jpg";
import pic1 from "./pictures/pic1.jpg";
import headerPic from "./pictures/header.jpeg";
import tec80 from "./pictures/tec80.jpg";

import * as HoverCard from "@radix-ui/react-hover-card";
import { animated } from "@react-spring/web";
import { ThemeContext } from "../../app/themeContext";
import { useContext } from "react";

import { clsx } from "clsx";

export const HoverComponent = ({ ...props }) => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";

  return (
    <HoverCard.Root openDelay={250}>
      <HoverCard.Trigger asChild>
        <a
          className={classes.hovercard_trigger}
          href="https://www.linkedin.com/in/alejandrogonzalz/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div>
            <img src={pic0} />
          </div>
        </a>
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content sideOffset={5} asChild side="right">
          <animated.div
            className={clsx(classes.hovercard_content, {
              [classes.light]: light,
            })}
            style={props.style}
          >
            <div className={classes.content_container}>
              <div className={classes.header_container}>
                <img src={headerPic} alt="headerPic" />
              </div>
              <div className={classes.bottom_container}>
                <div className={classes.pic_container}>
                  <img src={pic1} alt="linkedinpic" />
                </div>
                <div className={classes.text_container}>
                  <div className={classes.info_container}>
                    <div>
                      <h3>Alejandro González Almazán</h3>
                      <h4>
                        9th semester of B.S. in Nanotechnology Engineering
                      </h4>
                    </div>

                    <a
                      className={classes.school_container}
                      href="https://www.linkedin.com/school/tecdemonterrey/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className={classes.school_logo}>
                        <img src={tec80} alt="tec" />
                      </div>
                      <h4 className={clsx({ [classes.a_light]: light })}>
                        Tecnológico de Monterrey
                      </h4>
                    </a>
                  </div>

                  <div className={classes.contact_container}>
                    <p>
                      Monterrey, Nuevo León, Mexico
                      <span
                        className={clsx(classes.blue_info, {
                          [classes.a_light]: light,
                        })}
                      >
                        Contact info
                      </span>
                    </p>
                    <p>
                      <span>
                        <a
                          href="https://www.linkedin.com/search/results/people/?network=%5B%22F%22%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&sid=)TC"
                          target="_blank"
                          rel="noreferrer noopener"
                          className={clsx({ [classes.a_light]: light })}
                        >
                          325 connections
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <HoverCard.Arrow className={classes.hovercard_arrow} />
          </animated.div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
