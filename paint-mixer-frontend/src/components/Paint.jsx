import React from 'react';

export default function Paint(props) {

    const { paint, onPaintClick } = props;
    const { hexCode, name } = paint;

    return(
        <li 
        className="paint-container"
        style={{ border: `${hexCode} 5px solid`, borderBottom: `${hexCode} 80px solid` } }
        onClick={e => onPaintClick(hexCode)}>
            
            <div className="paint-name">
                {name}
            </div>
            <div className="paint-code">
                {hexCode}
            </div>
            {/* <div className="paint-pot" style={{ backgroundColor: hexCode }}>

            </div> */}
            
        </li>
    )
}