import clsx from "clsx";
import type { SharedProps } from "@typing";
import type { Paint } from "@prisma/client";

export type PaintDescriptionProps = SharedProps<{
  paint: Paint;
}>;

export const PaintDescription = ({
  paint,
  className,
}: PaintDescriptionProps) => {
  return (
    <div className={clsx("", className)}>
      <p>{paint.name}</p>
      {/* <p>{paint.range}</p> */}
      <p>{paint.hexCode}</p>
    </div>
  );
};
