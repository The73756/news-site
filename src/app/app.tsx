import "./styles/main.css";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "@/app/providers/theme-provider";
import { MainPage } from "@/pages/main-page";
import { AboutPage } from "@/pages/about-page";

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
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
