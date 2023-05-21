import "./styles/main.css";
import { Link } from "react-router-dom";
import { useTheme } from "@/app/providers/theme-provider";

import { AppRouter } from "@/app/providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme} className="app">
      <button className="btn" onClick={toggleTheme}>
        Change Theme
      </button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
};
