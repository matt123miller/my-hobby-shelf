import React, { useState } from 'react';


export default function ColourPicker(props) {

    const { chosenColour, setColour, number } = props;

    const colourChangeEvent = (e) => {
        setColour(e.target.value);
    }

    return <div style={{margin: '3rem'}}>
        <input type="color" name={`Colour${number}`} id={`Colour${number}`} value={chosenColour} onChange={colourChangeEvent} />
        <span style={{ color: chosenColour, marginLeft: '1rem' }}>{chosenColour}</span>
    </div>
} 