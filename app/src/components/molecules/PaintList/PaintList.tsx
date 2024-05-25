import type { Paint, SharedProps } from "@typing/index";
import { PaintCard } from "../PaintCard";

export type PaintListProps = SharedProps<{
  paints?: Paint[];
}>;
export const PaintList = ({ paints = [] }: PaintListProps) => {
  return (
    <div className="paint-grid grid w-full content-center gap-4 p-8">
      {paints.map((paint, i) => {
        return (
          <div key={paint.id}>
            <PaintCard paint={paint} selectionIndex={i + 1} />
          </div>
        );
      })}
    </div>
  );
};
