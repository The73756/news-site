import "./styles/main.css";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages";
import { AboutPageAsync } from "./pages";
import { Suspense } from "react";
import { useTheme } from "./theme/use-theme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme} className="app">
      <button className="btn" onClick={toggleTheme}>
        Change Theme
      </button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div className="text-blue-800">Загрузка</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
