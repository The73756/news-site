import { cls } from "@/shared/lib";
import { Button, Icon } from "@/shared/ui";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button onClick={toggle} size="large" shape="rounded" className={cls("", {}, [className])}>
      <Icon name="shared/translate" />
    </Button>
  );
};
