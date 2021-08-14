import React from 'react';
import {} from '../types';

export default function Paint(props) {
  const { paint, onPaintClick } = props;
  const { hexCode, name } = paint;

  return (
    <div
      className="paint-container"
      style={{ backgroundColor: hexCode }}
      onClick={(e) => onPaintClick(hexCode)}
    >
      <div className="paint-name">{name}</div>
      <div className="paint-code">{hexCode}</div>
    </div>
  );
}

// style = {{ border: `${hexCode} 5px solid`, borderBottom: `${hexCode} 80px solid` }}
