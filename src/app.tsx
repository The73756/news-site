import "./index.css";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages";
import { AboutPageAsync } from "./pages";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="hello">
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
