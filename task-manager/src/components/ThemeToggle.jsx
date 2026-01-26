import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <button
      className="theme-btn"
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
    >
      {theme === "light" ? "🌙 Dark" : "☀ Light"}
    </button>
  );
}

export default ThemeToggle;
