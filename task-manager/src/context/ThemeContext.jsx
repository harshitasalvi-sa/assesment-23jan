import { createContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

export default function ThemeProvider({ children }) {
  const [storedTheme, setStoredTheme] = useLocalStorage("theme", "light");
  const [theme, dispatch] = useReducer(reducer, storedTheme);

  if (theme !== storedTheme) {
    setStoredTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
