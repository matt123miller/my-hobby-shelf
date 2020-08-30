import React from 'react';


export default ComplimentaryColours;

function ComplimentaryColours(props){

    const { chosenColour } = props;

    // set to the opposite of our chosen colour
    let colourAsRgb = hexToRgb(chosenColour.slice(1));
    const { r, g, b } = findComplimentaryColour(colourAsRgb);
    let complimentaryColour = rgbToHex(r,g,b);

    return <div>
        {}
        <span style={{ color: chosenColour, margin: '1rem' }}>chosen: {chosenColour}</span>
        <span style={{ color: complimentaryColour, margin: '1rem' }}>complimentary colour: {complimentaryColour}</span>
    </div>
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.padStart(2, '0');
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * 
 * @param {Object} rgb
 * @param {Number} rgb.r
 * @param {Number} rgb.g
 * @param {Number} rgb.b
 */
function findComplimentaryColour({r, g, b}){
    return {
        r: 255 - r,
        g: 255 - g,
        b: 255 - b
    }
}


function hexToRgb(hex) {
    
    return {
        r: parseInt(hex.slice(0,2), 16),
        g: parseInt(hex.slice(2,4), 16),
        b: parseInt(hex.slice(4), 16)
    };
}
