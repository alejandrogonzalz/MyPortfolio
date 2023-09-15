import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type AppContext = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  screenWidth: number;
};

export const AppContext = createContext<AppContext | undefined>({
  theme: "dark",
  setTheme: () => {},

  open: false,
  setOpen: () => {},

  screenWidth: window.innerWidth,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // localstorage to save the theme choice
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 50);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const contextValue: AppContext = {
    theme,
    setTheme,
    open,
    setOpen,
    screenWidth,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useScreenWidth = () => {
  const appContext = useContext(AppContext);
  return appContext?.screenWidth ?? window.innerWidth;
};
