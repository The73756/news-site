import { cls } from "@/shared/lib";
import { useTheme } from "@/app/providers/theme-provider";
import { Icon } from "@/shared/ui/icon/icon";
import { Theme } from "@/app/providers/theme-provider/lib";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button className={cls("btn-circle btn text-xl", {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <Icon name="theme/moon" /> : <Icon name="theme/sun" />}
    </button>
  );
};
