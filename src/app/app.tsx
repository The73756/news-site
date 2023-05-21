import "./styles/main.css";
import { useTheme } from "@/app/providers/theme-provider";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/navbar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
};
