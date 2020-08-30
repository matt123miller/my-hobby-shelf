import React from 'react';

export default function Paint(props) {

    const { paint, onPaintClick } = props;

    return(
        <li className="paint-container" onClick={e => onPaintClick(paint.hexCode)}>
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


// {
//     "name": "Nuln Oil",
//         "svg": "https://www.games-workshop.com/resources/catalog/product/600x620/99189953017_shadeNulnOil.svg",
//             "hexCode": "#101010",
//                 "filePath": "./paintimages/Nuln Oil.svg"
// },