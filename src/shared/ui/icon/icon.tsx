import { SVGProps } from "react";
import { SpritesMap } from "./sprite-definitions";
import { cls } from "@/shared/lib";

export type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: SpriteKey;
}

export const Icon = ({ name, className, viewBox, ...props }: IconProps) => {
  const [spriteName, iconName] = name.split("/");

  return (
    <svg
      className={cls("select-none fill-current w-[1em] h-[1em] inline-block text-inherit", {}, [
        className,
      ])}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}>
      <use xlinkHref={`./sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  );
};
