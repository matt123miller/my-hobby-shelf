import type { PaintRecord, SharedProps } from "@typing/index";
import { PaintCard } from "../PaintCard";

export type PaintListProps = SharedProps<{
  paints?: PaintRecord[];
}>;
export const PaintList = ({ paints = [] }: PaintListProps) => {
  return (
    <ul>
      {paints.map((paint) => {
        return (
          <li key={paint.name}>
            <PaintCard paint={paint} />
          </li>
        );
      })}
    </ul>
  );
};
