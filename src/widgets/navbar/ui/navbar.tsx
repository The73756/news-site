import { cls } from "@/shared/lib";
import { AppLink } from "@/shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cls("navbar h-navbar bg-base-300 px-8", {}, [className])}>
      <ul className="w-full">
        <li className="flex-1">
          <AppLink to="/" className="btn-ghost btn text-xl normal-case">
            News site
          </AppLink>
        </li>
        <li>
          <AppLink to="/" className="mr-2">
            Главная
          </AppLink>
          <AppLink to="/about">О сайте</AppLink>
        </li>
      </ul>
    </nav>
  );
};
