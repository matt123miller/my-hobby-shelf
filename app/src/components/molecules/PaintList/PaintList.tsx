import type { Paint, SharedProps } from "@typing/index";
import { useLocalPaintSelection } from "hooks/useLocalPaintSelection";
import { PaintCard } from "../PaintCard";

export type PaintListProps = SharedProps<{
  paints?: Paint[];
}>;
export const PaintList = ({ paints = [] }: PaintListProps) => {
  const { paintSelectionQuery, addPaintMutation, removePaintMutation } =
    useLocalPaintSelection();
  const { data: selectionData, error: selectionError } = paintSelectionQuery;

  return (
    <>
      {selectionData && selectionData.length > 0 && (
        <>
          <p className="m-12 text-white">Selected Paints:</p>
          <div className="paint-grid grid w-full content-center gap-4 p-8">
            {selectionData.map((paint, i) => {
              return (
                <div
                  // key={paint.hexCode + "selection"}
                  onClick={() => {
                    removePaintMutation.mutate(paint);
                  }}
                >
                  <PaintCard paint={paint} selectionIndex={i + 1} />
                </div>
              );
            })}
            {/* {selectionError && selectionError} */}
          </div>
        </>
      )}
      <div className="paint-grid grid w-full content-center gap-4 p-8">
        {paints.map((paint, i) => {
          return (
            <div
              // key={paint.hexCode + "normal"}
              onClick={() => {
                addPaintMutation.mutate(paint);
              }}
            >
              <PaintCard paint={paint} selectionIndex={i + 1} />
            </div>
          );
        })}
      </div>
    </>
  );
};
