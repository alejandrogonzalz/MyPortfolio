import classes from "./navbar.module.scss";
import { LinkedInLogoIcon, GitHubLogoIcon, Cross1Icon} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import {  animated, useSpring } from "@react-spring/web";


import { clsx } from "clsx";

interface NavElement {
  text: string;
  path: string | undefined;
}

interface FnElement {
  icon: string;
  path: string;
}

export const FnElement = ({ icon, path }: FnElement) => {
  const content =
    icon === "linkedin" ? (
      <LinkedInLogoIcon className={classes.social_icon} />
    ) : (
      <GitHubLogoIcon className={classes.social_icon} />
    );

  return (
    <div className={classes.fn_element}>
      <a href={path} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </div>
  );
};

export const FnElements = () => {
  const fnElements = [
    { icon: "linkedin", path: "https://www.linkedin.com/in/alejandrogonzalz/" },
    { icon: "github", path: "https://github.com/alejandrogonzalz" },
  ];
  return (
    <div className={classes.fn_elements}>
      {fnElements.map((item, index) => {
        return <FnElement key={index} icon={item.icon} path={item.path} />;
      })}
    </div>
  );
};

const NavElement = ({ text, path }: NavElement) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "About") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 0);
    } else if (text === "Home") {
      window.scrollTo(0, 0);
      navigate("/");
    } else if (typeof path === "string") {
      navigate(path);
    }
  };

  return (
    <div className={classes.nav_element} onClick={handleClick}>
      <button>{text}</button>
    </div>
  );
};

interface NavElementsProps {
  className?: string;
  navOpen?: boolean;
  setNavOpen?: (value: boolean) => void;

}

interface StyleSpringProps {
  right: any,
}

export const NavElements = ({ className, navOpen, setNavOpen}: NavElementsProps) => {
  const navElements = [
    { text: "Home", path: "/" },
    { text: "About", path: "/" },
    { text: "Projects", path: "/projects" },
  ];

  const handleNavClose = () =>{
    if (setNavOpen){
    setNavOpen(false)
  }
  }

  const springProps: StyleSpringProps = useSpring({
    right: navOpen  === false ? '-30vw' : '0vw',
  });

  return (
    <>
      <animated.div 
  style={setNavOpen ? {
    ...springProps
  } : undefined}
      className={clsx(classes.nav_elements, className)}>

        {navOpen=== true ? 
        (<button className={classes.nav_close_trigger} onClick={handleNavClose}>
          <Cross1Icon/>
        </button>)
      : null}


        <FnElements />
        {navElements.map((item, index) => {
          return <NavElement key={index} text={item.text} path={item?.path} />;
        })}

      </animated.div>
    </>
  );
};
