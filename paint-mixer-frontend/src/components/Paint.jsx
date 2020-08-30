import React from 'react';

export default function Paint(props) {

    const { paint, onPaintClick } = props;
    const { hexCode, name } = paint;

    return(
        <li 
        className="paint-container"
        style={{ border: `${hexCode} 5px solid`, borderBottom: `${hexCode} 80px solid` } }
        onClick={e => onPaintClick(hexCode)}>
            
            <div class="paint-name">
                {name}
            </div>
            <div class="paint-code">
                {hexCode}
            </div>
            {/* <div class="paint-pot" style={{ backgroundColor: hexCode }}>

            </div> */}
            
        </li>
    )
}