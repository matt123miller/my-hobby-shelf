import React from 'react';

export default function Paint(props) {

    const { paint, onPaintClick, className } = props;
    const { hexCode, name } = paint;

    return (
        <div
            className={`paint-container ${className}`}
            style={{ border: `${hexCode} 5px solid`, borderBottom: `${hexCode} 80px solid` }}
            onClick={e => onPaintClick(hexCode)}>

            <div className="paint-name">
                {name}
            </div>
            <div className="paint-code">
                {hexCode}
            </div>
        </div>
    )
}