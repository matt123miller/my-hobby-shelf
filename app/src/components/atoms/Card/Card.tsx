import type { ClassValue } from "clsx";
import clsx from "clsx";

export type CardProps = React.PropsWithChildren & {
  cardClasses?: ClassValue;
  id: string;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => unknown;
};

const defaultCardClasses =
  "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow";

export const ListItemCard = ({
  name,
  id,
  onClick,
  children,
  cardClasses,
}: CardProps) => {
  const classes = clsx(cardClasses, defaultCardClasses);
  return (
    <li className={classes} onClick={onClick} id={id}>
      <div className="flex flex-1 flex-col p-8">{children}</div>
    </li>
  );
};

export const Card = ({
  name,
  id,
  onClick,
  children,
  cardClasses,
}: CardProps) => {
  const classes = clsx(cardClasses, defaultCardClasses);
  return (
    <div className={classes} onClick={onClick} id={id}>
      <div className="flex flex-1 flex-col p-8">{children}</div>
    </div>
  );
};
