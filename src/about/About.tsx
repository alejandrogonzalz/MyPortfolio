import classes from "./about.module.scss";

import { animated } from "@react-spring/web";
import * as Separator from "@radix-ui/react-separator";

import { useScreenWidth } from "../app/AppContext";

import JS from "./assets/js.svg";
import TS from "./assets/typescript.svg";
import CSS from "./assets/css3.svg";
import SASS from "./assets/sass.svg";
import REACT from "./assets/react.svg";

import REPUBLIC from "./assets/republic.svg";
import REBEL from "./assets/rebel.svg";
import JEDI from "./assets/jedi.svg";
import PHOENIX from "./assets/phoenix.svg";
import MANDALORIAN from "./assets/mandalorian.svg";
import FULCRUM from "./assets/fulcrum.svg";

import { Space } from "./space";

export const About = ({ ...props }) => {
  let content;
  const screenWidth = useScreenWidth();

  const competences = [
    { id: "adaptability", icon: JEDI },
    { id: "team work", icon: REBEL },
    { id: "love for learning", icon: MANDALORIAN },
    { id: "proactivity", icon: REPUBLIC },
    { id: "leadership", icon: PHOENIX },
    { id: "problem analyst", icon: FULCRUM },
  ];

  const items = [
    {
      title: "Web development",
      content:
        "Capable of building a fullstack application on my own. I find myself more comfortable using React and NodeJS",
    },
    {
      title: "UI/UX designing",
      content:
        "Experienced in creating visually appealing interfaces, supported by figma and photoshop designs",
    },
    {
      title: "Market analysis ",
      content:
        "Having a background and experience in research, I  perform market analysis, using data analysis tools such as tableu and python",
    },
  ];

  if (screenWidth < 760) {
    content = (
      <div className={classes.main_container}>
        <div className={classes.background} />
        <div className={classes.top_container}>
          <div className={classes.title_container}>
            <h1>ABOUT ME</h1>
            <Separator.Root className={classes.separator_horizontal} />
          </div>
          <div className={classes.biography}>
            I am a <strong>junior developer </strong>with a solid foundation in
            both frontend and backend{" "}
            <span className={classes.js}>
              JavaScript <img src={JS} alt="Javascript" />
            </span>
            . I specialize in frontend development, backed by a strong
            understanding of{" "}
            <span className={classes.css}>
              CSS <img src={CSS} alt="CSS3" />
            </span>{" "}
            using{" "}
            <span className={classes.sass}>
              SASS <img src={SASS} alt="SASS" />
            </span>
            . My skill set encompasses{" "}
            <span className={classes.ts}>
              TypeScript <img src={TS} alt="Typescript" />
            </span>{" "}
            and a strong affinity for{" "}
            <span className={classes.react}>
              REACT <img src={REACT} alt="" />
            </span>
            . Proficient in the <span>Model-View-Controller (MVC)</span> design
            pattern, I'm experienced with both relational (MySQL) and
            non-relational (MongoDB) databases.
          </div>
          <div className={classes.lightsaber_container}>
            <Separator.Root className={classes.lightsaber_1} />
            <Separator.Root className={classes.lightsaber_2} />
          </div>
        </div>

        <div className={classes.bottom_container}>
          <div className={classes.subtitle_container}>
            <h2>What do I do?</h2>
          </div>

          <div className={classes.wrapper}>
            {items.map((item, index) => {
              return (
                <div key={index} className={classes.wrapper_item}>
                  <div className={classes.item_title}>
                    <h3>{item.title}</h3>
                  </div>
                  <Separator.Root className={classes.vertical_line} />
                  <div className={classes.item_content}>{item.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <>
        <div className={classes.main_container}>
          <div className={classes.background} />
          <div className={classes.top_container}>
            <div className={classes.title_container}>
              <h1>ABOUT ME</h1>
              <Separator.Root className={classes.separator_horizontal} />
            </div>
            <div className={classes.biography}>
              I am a <strong>junior developer </strong>with a solid foundation
              in both frontend and backend{" "}
              <span className={classes.js}>
                JavaScript <img src={JS} alt="Javascript" />
              </span>
              . I specialize in frontend development, backed by a strong
              understanding of{" "}
              <span className={classes.css}>
                CSS <img src={CSS} alt="CSS3" />
              </span>{" "}
              using{" "}
              <span className={classes.sass}>
                SASS <img src={SASS} alt="SASS" />
              </span>
              . My skill set encompasses{" "}
              <span className={classes.ts}>
                TypeScript <img src={TS} alt="Typescript" />
              </span>{" "}
              and a strong affinity for{" "}
              <span className={classes.react}>
                REACT <img src={REACT} alt="" />
              </span>
              . Proficient in the <span>Model-View-Controller (MVC)</span>{" "}
              design pattern, I'm experienced with both relational (MySQL) and
              non-relational (MongoDB) databases.
            </div>
            <div className={classes.lightsaber_container}>
              <Separator.Root className={classes.lightsaber_1} />
              <Separator.Root className={classes.lightsaber_2} />
            </div>
          </div>

          <div className={classes.bottom_container}>
            <div className={classes.subtitle_container}>
              <h2>What do I do?</h2>
            </div>

            <div className={classes.wrapper}>
              {items.map((item, index) => {
                return (
                  <div key={index} className={classes.wrapper_item}>
                    <div className={classes.item_title}>
                      <h3>{item.title}</h3>
                    </div>
                    <Separator.Root className={classes.vertical_line} />
                    <div className={classes.item_content}>{item.content}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes.secondary_container}>
          <div className={classes.background} />
          <div
            className={classes.title_container}
            style={{ justifyContent: "center" }}
          >
            <h1>COMPETENCES</h1>
          </div>
          <ul className={classes.competences_wrapper}>
            {competences.map((item, index) => {
              return (
                <li key={`${item.id}${index}`}>
                  <div className={classes.competence_item}>
                    <span className={classes.starwars}>
                      <img src={item.icon} alt={item.icon} />
                    </span>
                    <span className={classes.starwars_text}>{item.id}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <Space />
      <animated.div className={classes.about__page} style={props.style}>
        {content}
      </animated.div>
    </>
  );
};
