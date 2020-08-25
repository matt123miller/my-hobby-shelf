import React from 'react';


export default ComplimentaryColours;

function ComplimentaryColours(props){

    const { chosenColour } = props;

    let complimentaryColour = '#cdbdf5';

    return <div>
        <span style={{ color: chosenColour, marginLeft: '1rem' }}>chosen: {chosenColour}</span>
        <span style={{ color: chosenColour, marginLeft: '1rem', filter: 'invert()' }}>complimentary colour: {complimentaryColour}</span>
    </div>
}