import "./styles/main.css";
import { Suspense } from "react";
import { useTheme } from "@/app/providers/theme-provider";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/navbar";
import { Sidebar } from "@/widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="app">
      <Suspense fallback="">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-5">
            <AppRouter />
          </main>
        </div>
      </Suspense>
    </div>
  );
};
