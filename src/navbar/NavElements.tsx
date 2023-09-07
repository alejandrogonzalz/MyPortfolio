import classes from "./navbar.module.scss";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

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
}

export const NavElements = ({ className }: NavElementsProps) => {
  const navElements = [
    { text: "Home", path: "/" },
    { text: "About", path: "/" },
    { text: "Projects", path: "/projects" },
  ];
  return (
    <>
      <div className={clsx(classes.nav_elements, className)}>
        <FnElements />
        {navElements.map((item, index) => {
          return <NavElement key={index} text={item.text} path={item?.path} />;
        })}
      </div>
    </>
  );
};
