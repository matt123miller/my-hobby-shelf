import clsx from "clsx";
import { Card, ColourBlock, PaintDescription } from "@components/atoms";
import type { SharedProps } from "@typing/index";
import type { Paint } from "@prisma/client";
import type { ExtendedPaint } from "../../../types";

export type PaintCardProps = SharedProps<{
  paint: Paint;
}>;

export const PaintCard = ({ paint, children, className }: PaintCardProps) => {
  const style = {
    backgroundColor: paint.hexCode,
  };

  return (
    <Card
      style={style}
      className={clsx("h-40 min-h-full max-w-xs", className)}
      id={paint.name}
      name={paint.name}
    >
      <PaintDescription paint={paint}></PaintDescription>
    </Card>
  );
};
