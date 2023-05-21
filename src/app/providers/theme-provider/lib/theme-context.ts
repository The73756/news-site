import { createContext, Dispatch, SetStateAction } from "react";

export enum Theme {
  LIGHT = "winter",
  DARK = "night",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_KEY = "theme";
