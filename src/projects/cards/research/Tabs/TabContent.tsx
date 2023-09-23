import classes from "./tabs.module.scss";
import { clsx } from "clsx";

import * as Separator from "@radix-ui/react-separator";

import { AppContext } from "../../../../app/AppContext";
import { useContext } from "react";

import DNA from "../assets/first/dna.png";
import AGAVE from "../assets/first/agave.png";

import DNA_2 from "../assets/second/dna_2.png";
import LUNG from "../assets/second/lung.png";

import ME from "../assets/third/me.png";
import COLLAGE from "../assets/third/collage.png";
import CYCLIN from "../assets/third/cyclind1.png";
import POSTER from "../assets/third/poster.png";

import BRAIN from "../assets/fourth/brain.png";

export const FirstTab = () => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";

  return (
    <div
      className={clsx(classes.container, classes.first_tab, {
        [classes.light]: light,
      })}
    >
      <div className={classes.top_container}>
        <div className={classes.text_container}>
          <div className={classes.main_text}>
            Planning and elaboration of a <strong>Fusarium sp. </strong>
            detection system in{" "}
            <strong className={classes.agave}>Agave Tequilana</strong>
          </div>
        </div>
        <div className={classes.img_container}>
          <div className={classes.img_content}>
            <img src={AGAVE} alt="Agave" draggable={false} loading="lazy" />
          </div>
        </div>
      </div>

      <div className={classes.bottom_container}>
        <div className={clsx(classes.img_container, classes.dna_container)}>
          <div className={classes.img_content}>
            <img src={DNA} alt="DNA" draggable={false} loading="lazy" />
          </div>
        </div>
        <div className={classes.text_container}>
          <div className={classes.bottom_content}>
            Using{" "}
            <strong className={classes.biology}>molecular biology </strong>
            techniques by directly targeting its DNA
          </div>

          <ul className={classes.technique_list}>
            <li className={classes.item_one}>RPA Amplification</li>
            <li className={classes.item_two}>Cell free system</li>
            <li className={classes.item_three}>HRP colorimetric response</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const SecondTab = () => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";
  return (
    <div
      className={clsx(classes.container, classes.second_tab, {
        [classes.light]: light,
      })}
    >
      <div className={classes.circle} />
      <div className={classes.content}>
        <div className={classes.img_container}>
          <img src={LUNG} alt="LUNG" draggable={false} loading="lazy" />
        </div>
        <h1 className={classes.title}>
          DNA quantification <br /> for <span>lung diseases</span>
        </h1>
        <div className={clsx(classes.img_container, classes.dna_container)}>
          <img src={DNA_2} alt="DNA" draggable={false} loading="lazy" />
        </div>
      </div>
      <p className={classes.footer}>
        I followed up on a doctoral thesis with pending results{" "}
      </p>
    </div>
  );
};

export const ThirdTab = () => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";
  return (
    <div
      className={clsx(classes.container, classes.third_tab, {
        [classes.light]: light,
      })}
    >
      <div className={classes.top_container}>
        <div className={classes.text_container}>
          <div className={classes.title}>
            <h3>
              Research stay at the <br />
              <span>University of Illinois at Urbana-Champaign</span>
            </h3>
            <Separator.Root className={classes.separator_horizontal} />
          </div>

          <ul className={classes.points}>
            <li>
              <Separator.Root className={classes.separator_vertical} />
              <div className={classes.point}>
                <strong>Lead author</strong> of upcoming article focus on a
                treatment that prevents <strong>melanoma</strong> in mice
              </div>
            </li>
            <li>
              <Separator.Root className={classes.separator_vertical} />
              <div className={classes.point}>
                Article review on <strong>bioactive compounds</strong> in daily
                foods for the treatment of <strong>diabetes</strong> and{" "}
                <strong>cancer</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img
              src={ME}
              alt="A picture of myself"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className={classes.bottom_container}>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img
              src={CYCLIN}
              alt="Cyclin D1 positive transcriptional feedback"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img
              src={COLLAGE}
              alt="Lab work"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={POSTER} alt="Poster " draggable={false} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FourthTab = () => {
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";
  return (
    <div
      className={clsx(classes.container, classes.fourth_tab, {
        [classes.light]: light,
      })}
    >
      <div className={classes.top_container}>
        <Separator.Root className={classes.v_top} />
        <Separator.Root className={classes.h_top} />
        <div className={classes.title}>
          <h1>
            Adverse <br />
            Childhood <br />
            Experiences
          </h1>
        </div>
      </div>
      <div className={classes.brain_container}>
        <div className={classes.brain}>
          <img src={BRAIN} alt="A brain..." draggable={false} loading="lazy" />
        </div>
      </div>
      <div className={classes.bottom_container}>
        <Separator.Root className={classes.h_bot} />
        <Separator.Root className={classes.v_bot} />
        <div className={classes.title}>
          <h2>Measuring stress biomarkers in children hair</h2>
        </div>
      </div>
    </div>
  );
};
