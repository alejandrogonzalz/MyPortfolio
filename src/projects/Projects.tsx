import classes from "./projects.module.scss";
import { clsx } from "clsx";

import { ThemeContext } from "../app/ThemeContext";
import { useContext, useEffect , useState} from "react";
import { useSpring, animated } from "@react-spring/web";

import {HLine} from '../shared/lines';
import { ProjectCard } from "./ProjectCard";


const indexItems = [
  {name: 'DentalGo'},
  {name: 'TerraCapital'},
  {name: 'Research Experience'},
]


export const Projects = () => {
  const themeContext = useContext(ThemeContext);
  const light = themeContext?.theme === "light";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    document.body.style.backgroundColor = light
      ? "hsl(60, 7.7%, 97.5%)"
      : "hsl(50, 8%, 12%)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [light]);



  return (
    <div className={clsx(classes.body, { [classes.light]: light })}>

    <div className={classes.project_container}>
      <h1>{`<projects>`}</h1>

      <h1>{`</projects>`}</h1>
    </div>

    </div>
  );
};


   {/* <>
      <HLine className={classes.top_line}/>
      <h1 className={classes.title}>Projects.</h1>
      <HLine className={classes.bot_line}/>
    </>
    <div className={classes.index_container}>
        {indexItems.map((item, index) => {
          const isHovered = index === hoveredIndex;
          const indexStyle = useSpring({
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            padding: isHovered ? '4px 30px' : '4px 15px', 
            backgroundColor: isHovered ? 'white' : 'transparent',
            color: isHovered ? 'black' : 'white', 
          });

          return (
            <animated.div
              key={`${item.name}${index}`}
              className={classes.index_item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ ...indexStyle }}
            >
              {item.name}
            </animated.div>
          );
        })}
      </div> */}