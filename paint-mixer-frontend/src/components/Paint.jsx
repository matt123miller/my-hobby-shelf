import React from 'react';

export default function Paint(props) {

    const { paint, onPaintClick } = props;

    return(
        <li className="paint-container p1" onClick={e => onPaintClick(paint.hexCode)}>
            <div>
                Name: {paint.name}
            </div>
            <div>
                Hex: {paint.hexCode}
            </div>
            <img className="paint-pot" src={paint.svg} alt={paint.name}/>
        </li>
    )
}