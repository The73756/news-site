import { cls } from "@/shared/lib";
import { useTheme } from "@/app/providers/theme-provider";
import { Icon } from "@/shared/ui/icon/icon";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button className={cls("btn", {}, [className])}>
      <Icon name="theme/moon" className="" onClick={toggleTheme} />
    </button>
  );
};
