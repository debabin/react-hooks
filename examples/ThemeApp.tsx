import { useTheme } from "./themeContext";

export const ThemeApp = () => {
  const { value, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(value === "dark" ? "light" : "dark")}>
      change theme, current {value}
    </button>
  );
};
