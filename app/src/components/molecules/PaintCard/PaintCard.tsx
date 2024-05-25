import type { Paint, SharedProps } from "@typing/index";
import clsx from "clsx";

import { Card, PaintDescription } from "@components/atoms";

export type PaintCardProps = SharedProps<{
  selectionIndex?: number;
  paint: Paint;
}>;

export const PaintCard = ({
  paint,
  selectionIndex,
  className,
}: PaintCardProps) => {
  const style = {
    backgroundColor: paint.hexCode,
  };

  return (
    <Card
      style={style}
      className={clsx(
        "h-40 min-h-full max-w-xs outline-dashed hover:outline-2 hover:outline-rose-50",
        className
      )}
      id={paint.name}
      name={paint.name}
      selectionIndex={selectionIndex}
    >
      <PaintDescription paint={paint}></PaintDescription>
    </Card>
  );
};
