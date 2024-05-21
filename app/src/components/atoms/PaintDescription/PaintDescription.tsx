import type { Paint } from "@prisma/client";
import type { SharedProps } from "@typing";
import clsx from "clsx";

export type PaintDescriptionProps = SharedProps<{
  paint: Paint;
}>;

export const PaintDescription = ({
  paint,
  className,
}: PaintDescriptionProps) => {
  return (
    <div
      className={clsx(
        "min-w-content min-h-content max-h-full max-w-full rounded-md border border-gray-400 bg-gray-100 p-1 dark:bg-gray-700",
        className
      )}
    >
      <p>{paint.name}</p>
      {/* <p>{paint.range}</p> */}
      <p>{paint.hexCode}</p>
    </div>
  );
};
