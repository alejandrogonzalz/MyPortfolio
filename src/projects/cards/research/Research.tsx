import classes from "./research.module.scss";

import * as Separator from "@radix-ui/react-separator";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { AppContext } from "../../../app/AppContext";
import { useContext, useEffect, useState } from "react";
import { useSpringButton } from "../sharedFX";

import { animated, useSpring, useTransition } from "@react-spring/web";
import { clsx } from "clsx";

import { FirstTab, SecondTab, ThirdTab, FourthTab } from "./Tabs/TabContent";

export const ResearchCard = () => {
  let content, frontContent;
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("tab1");
  const [activeStep, setActiveStep] = useState<number>(0);

  const buttonMoreProps = useSpringButton(isButtonHover);

  useEffect(() => {
    console.log(tab);
    const found = tablist.find((item) => item.id === tab);
    if (found) {
      setActiveStep(found.value);
    }
  }, [tab]);

  const tablist = [
    { id: "tab1", name: "iGem", year: "2020", value: 0 },
    { id: "tab2", name: "TecSalud", year: "2021", value: 1 },
    { id: "tab3", name: "UIUC", year: "2022", value: 2 },
    { id: "tab4", name: "ACES", year: "2023", value: 3 },
  ];

  const leftSpring = useSpring({
    left: `${activeStep * 25}%`,
  });

  const transitions = useTransition(tab, {
    from: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -20 },
    initial: null,
    config: { duration: 150 },
  });

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 75 },
  });

  const ButtonMore = (
    <animated.button
      className={classes.button_code}
      style={{ ...buttonMoreProps }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsButtonHover(true)}
      onMouseLeave={() => setIsButtonHover(false)}
      onFocus={() => setIsButtonHover(true)}
      onBlur={() => setIsButtonHover(false)}
    >
      <span>Read more</span>
      <animated.span>...</animated.span>
    </animated.button>
  );

  content = (
    <>
      <div className={classes.container}>
        <button
          className={classes.back_button}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <ArrowTopRightIcon />
        </button>
        <div className={classes.title_container}>
          <div className={classes.title}>
            <h1>Research experience</h1>
          </div>
        </div>
        <Tabs.Root
          className={classes.tabs_root}
          value={tab}
          onValueChange={setTab}
        >
          <Tabs.List className={classes.tabs_list}>
            <animated.div
              style={{ ...leftSpring }}
              className={classes.selector_top}
            >
              <Separator.Root decorative />
            </animated.div>
            {tablist.map((item, index) => {
              return (
                <Tabs.Trigger
                  key={`${item.id}${index}`}
                  value={item.id}
                  className={clsx(classes.tabs_trigger, {
                    [classes.selected]: tab === item.id,
                  })}
                >
                  <strong>{item.name}</strong>
                  <span>{item.year}</span>
                </Tabs.Trigger>
              );
            })}
            <animated.div
              style={{ ...leftSpring }}
              className={classes.selector_bottom}
            >
              <Separator.Root decorative />
            </animated.div>
          </Tabs.List>
          <div className={classes.tabs_content_container}>
            {transitions((styles, item) =>
              item ? (
                <>
                  <Tabs.Content value="tab1" asChild>
                    <animated.div
                      className={classes.tabs_content}
                      style={styles}
                    >
                      <FirstTab />
                    </animated.div>
                  </Tabs.Content>
                  <Tabs.Content value="tab2" asChild>
                    <animated.div
                      className={classes.tabs_content}
                      style={styles}
                    >
                      <SecondTab />
                    </animated.div>
                  </Tabs.Content>
                  <Tabs.Content value="tab3" asChild>
                    <animated.div
                      className={classes.tabs_content}
                      style={styles}
                    >
                      <ThirdTab />
                    </animated.div>
                  </Tabs.Content>
                  <Tabs.Content value="tab4" asChild>
                    <animated.div
                      className={classes.tabs_content}
                      style={styles}
                    >
                      <FourthTab />
                    </animated.div>
                  </Tabs.Content>
                </>
              ) : null
            )}
          </div>
        </Tabs.Root>
      </div>
    </>
  );

  frontContent = (
    <>
      <div className={classes.front_container}>
        <h1 className={classes.title}>
          Research <br />
          Experience
        </h1>
        <div className={classes.button_container}>{ButtonMore}</div>
      </div>
      <div className={classes.orbit} />
      <div className={classes.circle} />
    </>
  );

  return (
    <>
      <animated.div
        className={clsx(classes.main_container, classes.front, {
          [classes.light]: light,
        })}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          zIndex: isFlipped ? 5 : 6,
        }}
      >
        {frontContent}
      </animated.div>
      <animated.div
        className={clsx(classes.main_container, {
          [classes.light]: light,
        })}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
          zIndex: isFlipped ? 6 : 5,
        }}
      >
        {content}
      </animated.div>
    </>
  );
};
