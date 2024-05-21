import type { Paint as PaintModel } from "@prisma/client";
import type { SharedProps } from "@typing/index";
import clsx from "clsx";

import { Card, PaintDescription } from "@components/atoms";

export type PaintCardProps = SharedProps<{
  paint: PaintModel;
}>;

export const PaintCard = ({ paint, className }: PaintCardProps) => {
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
