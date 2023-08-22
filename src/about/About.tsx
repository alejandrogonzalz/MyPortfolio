import classes from "./about.module.scss";

import { ReactNode } from "react";

import { animated } from "@react-spring/web";
import { HLine, VLine } from "../shared/lines";

export const About = ({ ...props }) => {
  const competences = [
    "adaptability",
    "team work",
    "love for learning",
    "proactivity",
    "leadership",
    "problem analyst",
  ];

  return (
    <animated.div className={classes.about__page} style={props.style}>
      <VLine className={classes.vertical_line_left} />
      <VLine className={classes.vertical_line_right} />
      <div className={classes.main_container}>
        <div>
          <h1>About Me</h1>
          <HLine className={classes.horizontal_line} />
          <div className={classes.about_me}>
            <p>
              I am a junior developer with a solid foundation in both frontend
              and backend JavaScript. I specialize in frontend development,
              backed by a strong understanding of CSS and SASS. My skill set
              encompasses TypeScript and a strong affinity for React. I'm
              experienced with both relational (MySQL) and non-relational
              (MongoDB) databases, and I navigate the Client-Server architecture
              adeptly. Proficient in the Model-View-Controller (MVC) design
              pattern, I utilize GitHub for version control and collaborate
              effectively using JIRA. Driven by an unyielding passion for
              learning, I am committed to continuous self-improvement because i
              believe that our value increases the more we learn
            </p>
          </div>
          <HLine className={classes.horizontal_line} />
        </div>
        <div>
          <h1>My competences include...</h1>
          <HLine className={classes.horizontal_line} />
          <div className={classes.my_competences}>
            {competences.map((competence, index) => {
              return <Competence key={index}>{competence}</Competence>;
            })}
          </div>
          <HLine className={classes.horizontal_line} />
        </div>
      </div>
    </animated.div>
  );
};

const Competence = ({ children }: { children: ReactNode }) => {
  return <animated.div className={classes.compentece}>{children}</animated.div>;
};
