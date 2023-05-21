import { cls } from "@/shared/lib";
import { AppLink } from "@/shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cls("navbar h-navbar bg-base-300 px-8", {}, [className])}>
      <div className="flex-1">
        <AppLink to="/" className="btn btn-ghost normal-case text-xl">
          News site
        </AppLink>
      </div>
      <div>
        <AppLink to="/" className="mr-2">
          Главная
        </AppLink>
        <AppLink to="/about">О сайте</AppLink>
      </div>
    </div>
  );
};
