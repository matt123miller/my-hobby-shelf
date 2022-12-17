import type { PaintRecord, SharedProps } from "@typing/index";
import { PaintCard } from "../PaintCard";

export type PaintListProps = SharedProps<{
  paints?: PaintRecord[];
}>;
export const PaintList = ({ paints = [] }: PaintListProps) => {
  return (
    <div className="paint-grid grid w-full content-center gap-4 p-8">
      {paints.map((paint) => {
        return (
          <div key={paint.name}>
            <PaintCard paint={paint} />
          </div>
        );
      })}
    </div>
  );
};
