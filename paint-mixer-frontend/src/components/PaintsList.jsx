import React from 'react';
import {Paint} from './index';


export default PaintsList;


function PaintsList(props) {

    const { paintData, onPaintClick } = props;

    return (
        <div className="paint-list">
            {
                paintData.map(paint => {
                    return <Paint key={paint.hexCode} paint={paint} onPaintClick={onPaintClick}/>
                })
            }
        </div>
    )
}