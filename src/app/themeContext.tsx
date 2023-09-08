import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ThemeContextInterface = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextInterface | undefined>({
  theme: "dark",
  setTheme: () => {},
  open: false,
  setOpen: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // localstorage to save the theme choice
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, open, setOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};
