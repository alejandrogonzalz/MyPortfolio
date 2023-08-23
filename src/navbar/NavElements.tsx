import classes from "./navbar.module.scss";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

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
    if (text === "About" && typeof path === "undefined") {
      window.scrollTo(0, 900);
    } else if (text === "Home" && typeof path === "undefined") {
      window.scrollTo(0, 0);
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

export const NavElements = () => {
  const navElements = [
    { text: "Home" },
    { text: "About" },
    { text: "Projects", path: "/" },
  ];
  return (
    <>
      <div className={classes.nav_elements}>
        <FnElements />
        {navElements.map((item, index) => {
          return <NavElement key={index} text={item.text} path={item?.path} />;
        })}
      </div>
    </>
  );
};
