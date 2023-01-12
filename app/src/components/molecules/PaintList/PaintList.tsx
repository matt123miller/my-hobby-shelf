import type { SharedProps } from "@typing/index";
import { PaintCard } from "../PaintCard";

import type { Paint } from "@prisma/client";

export type PaintListProps = SharedProps<{
  paints?: Paint[];
}>;
export const PaintList = ({ paints = [] }: PaintListProps) => {
  return (
    <div className="paint-grid grid w-full content-center gap-4 p-8">
      {paints.map((paint) => {
        return (
          <div key={paint.id}>
            <PaintCard paint={paint} />
          </div>
        );
      })}
    </div>
  );
};
