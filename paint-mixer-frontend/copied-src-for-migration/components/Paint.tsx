import React, { Dispatch } from 'react';
import { PaintRecord } from '../types';

type PaintProps = {
  paint?: PaintRecord;
  onPaintClick: Dispatch<React.SetStateAction<string>>;
};
export default function Paint(props: PaintProps) {
  const { paint, onPaintClick } = props;
  if (!paint) {
    return <> </>;
  }
  const { hexCode, name } = paint;

  return (
    <div
      role="presentation"
      className="paint-container chosen"
      style={{ backgroundColor: hexCode }}
      onClick={(e) => onPaintClick(hexCode)}
      onKeyDown={(e) => onPaintClick(hexCode)}
    >
      <div className="paint-name">{name}</div>
      <div className="paint-code">{hexCode}</div>
    </div>
  );
}

// style = {{ border: `${hexCode} 5px solid`, borderBottom: `${hexCode} 80px solid` }}
