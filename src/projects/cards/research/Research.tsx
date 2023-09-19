import classes from "./research.module.scss";

import * as Separator from "@radix-ui/react-separator";
import * as Tabs from "@radix-ui/react-tabs";
import { AppContext } from "../../../app/AppContext";
import { useContext, useEffect, useState } from "react";

import { animated, useSpring, useTransition } from "@react-spring/web";
import { clsx } from "clsx";

import { FirstTab, SecondTab, ThirdTab, FourthTab } from "./Tabs/TabContent";

export const ResearchCard = () => {
  let content;
  const appContext = useContext(AppContext);
  const light = appContext?.theme === "light";

  const [tab, setTab] = useState<string>("tab1");
  const [activeStep, setActiveStep] = useState<number>(0);

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
    from: { opacity: 0, x: 40 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 10 },
    initial: null,
    config: { duration: 350 },
  });

  content = (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Research experience</h1>
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

  return (
    <>
      <animated.div
        className={clsx(classes.main__container, { [classes.light]: light })}
      >
        {content}
      </animated.div>
    </>
  );
};
