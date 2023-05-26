import { cls } from "@/shared/lib";
import { useTheme } from "@/app/providers/theme-provider";
import { Icon } from "@/shared/ui/icon/icon";
import { Theme } from "@/app/providers/theme-provider/lib";
import { Button } from "@/shared/ui";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button shape="rounded" size="large" className={cls("", {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <Icon name="theme/moon" /> : <Icon name="theme/sun" />}
    </Button>
  );
};
