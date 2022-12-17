import clsx from "clsx";
import { Card, ColourBlock, PaintDescription } from "@components/atoms";
import type { PaintRecord, SharedProps } from "@typing/index";

export type PaintCardProps = SharedProps<{
  paint: PaintRecord;
}>;

export const PaintCard = ({ paint, children, className }: PaintCardProps) => {
  return (
    <Card
      className={clsx("min-w-xl max-w-6xl", className)}
      id={paint.name}
      name={paint.name}
    >
      <PaintDescription className="text-black" paint={paint}></PaintDescription>
      <ColourBlock colour={paint.hexCode}></ColourBlock>
    </Card>
  );
};
