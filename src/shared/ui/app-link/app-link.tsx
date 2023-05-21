import { cls } from "@/shared/lib";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ className, children, ...props }) => {
  return (
    <Link {...props} className={cls("link", {}, [className])}>
      {children}
    </Link>
  );
};
