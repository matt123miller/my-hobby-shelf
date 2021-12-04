import React, { Dispatch } from "react";
import { PaintRecord } from "../types";

type PaintProps = {
  paint?: PaintRecord;
  onPaintClick: Dispatch<React.SetStateAction<PaintRecord>>;
};
export default function Paint(props: PaintProps) {
  const { paint, onPaintClick } = props;
  if (!paint) {
    return <> </>;
  }
  const { name, hexCode, rgb } = paint;

  return (
    <li
      className="max-w-sm p-2 shadow-lg rounded-md border-2 border-black"
      style={{ backgroundColor: hexCode }}
      onClick={(e) => onPaintClick(paint)}
      onKeyDown={(e) => onPaintClick(paint)}
    >
      <div
        role="presentation"
        className="p-1 rounded-md border border-gray-400 bg-white"
      >
        <div className="text-lg">{name}</div>
        <div className="text-sm">{hexCode}</div>
        <div className="text-sm">{rgb.toString()}</div>
      </div>
    </li>
  );
}

// style = {{ border: `${hexCode} 5px solid`, borderBottom: `${hexCode} 80px solid` }}
