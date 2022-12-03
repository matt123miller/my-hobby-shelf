import clsx from "clsx";
import type { PaintRecord, SharedProps } from "types/index";

export type PaintDescriptionProps = SharedProps<{
  paint: PaintRecord;
}>;

export const PaintDescription = ({
  paint,
  className,
}: PaintDescriptionProps) => {
  return (
    <div className={clsx("", className)}>
      <p>{paint.name}</p>
      <p>{paint.range}</p>
      <p>{paint.hexCode}</p>
    </div>
  );
};
