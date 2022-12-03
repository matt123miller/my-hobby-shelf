import { Card, ColourBlock, PaintDescription } from "components/atoms";
import type { PaintRecord, SharedProps } from "types";

export type PaintCardProps = SharedProps<{
  paint: PaintRecord;
}>;

export const PaintCard = ({ paint, children, className }: PaintCardProps) => {
  return (
    <Card className="min-w-xl max-w-6xl" id={paint.name} name={paint.name}>
      <PaintDescription className="text-black" paint={paint}></PaintDescription>
      <ColourBlock colour={paint.hexCode}></ColourBlock>
    </Card>
  );
};
