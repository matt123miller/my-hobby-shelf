import type { SharedProps } from "@typing/index";
import clsx from "clsx";

export type CardProps = SharedProps<{
  wrappingElem?: "li" | "div"; // unsure what to do with this info
  id: string;
  name: string;
  selectionIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => unknown;
  style: { [key: string]: string };
}>;

export const Card = ({
  name,
  id,
  onClick,
  children,
  className,
  selectionIndex,
  style,
}: CardProps) => {
  const defaultCardClasses =
    "divide-y divide-gray-200 rounded-lg text-center shadow";

  const classes = clsx(className, defaultCardClasses);
  return (
    <section
      tabIndex={selectionIndex ?? undefined}
      style={style}
      className={classes}
      onClick={onClick}
      id={id}
    >
      <div className="flex flex-1 flex-col p-4">{children}</div>
    </section>
  );
};
