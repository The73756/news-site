import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div className="text-blue-800">Загрузка</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
