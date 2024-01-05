import { createContext, useContext } from "react";

export type Theme = "dark" | "light";
type ThemeContextParams = { value: Theme; setTheme: (theme: Theme) => void };

export const ThemeContext = createContext<ThemeContextParams>({
  value: "dark",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvide = ThemeContext.Provider;
