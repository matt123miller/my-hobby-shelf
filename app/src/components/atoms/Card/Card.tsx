import clsx from "clsx";
import type { SharedProps } from "@typing/index";

export type CardProps = SharedProps<{
  wrappingElem?: "li" | "div"; // unsure what to do with this info
  id: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => unknown;
}>;

export const Card = ({ name, id, onClick, children, className }: CardProps) => {
  const defaultCardClasses =
    "divide-y divide-gray-200 rounded-lg bg-white text-center shadow";

  const classes = clsx(className, defaultCardClasses);
  return (
    <section className={classes} onClick={onClick} id={id}>
      <div className="flex flex-1 flex-col p-4">{children}</div>
    </section>
  );
};
