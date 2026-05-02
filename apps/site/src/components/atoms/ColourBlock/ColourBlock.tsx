import type { SharedProps } from "types";
import clsx from "clsx";

export type ColourBlockProps = SharedProps<{
  colour: string; // unsure yet
}>;

export const ColourBlock = ({ colour, className }: ColourBlockProps) => {
  const style = {
    backgroundColor: colour,
  };

  return (
    <div
      style={style}
      className={clsx(
        "min-w-content min-h-content max-h-full max-w-full rounded-md border border-gray-400 p-1",
        className
      )}
    >
      {colour}
    </div>
  );
};
