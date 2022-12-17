import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { SharedProps } from "@typing/index";

export type CardProps = SharedProps<{
  wrappingElem?: "li" | "div"; // unsure what to do with this info
  id: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => unknown;
}>;

const defaultCardClasses =
  "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow";

export const Card = ({ name, id, onClick, children, className }: CardProps) => {
  const classes = clsx(className, defaultCardClasses);
  return (
    <article className={classes} onClick={onClick} id={id}>
      <div className="flex flex-1 flex-col p-8">{children}</div>
    </article>
  );
};
