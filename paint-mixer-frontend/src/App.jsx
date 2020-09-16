import React, { useState } from 'react';

import { ColourPicker, PaintsList, ComplimentaryColours, Paint } from './components';
import paintData from './data';

import './App.css';

function App() {


    const [chosenColour, setColour] = useState('#000000');

    const chosenPaint = findPaintByHex(chosenColour, paintData);

    return (
        <div className="">

            <header>
                <h1>Painting Colour Assistant</h1>
                <ColourPicker chosenColour={chosenColour} setColour={setColour} />
                <div className="colour-details-container m3">
                    {chosenPaint}
                    <ComplimentaryColours  className="centre" chosenColour={chosenColour} />
                    <div className="complimentary">right hand area....</div>
                </div>
            </header>
            <hr />
            <main>
                <PaintsList paintData={paintData.slice(0,50)} onPaintClick={setColour} />
            </main>
        </div>
    );
}


function findPaintByHex(hex, paints) {
    const foundPaint =  paints.find(p => p.hexCode === hex) ?? null;
    return foundPaint ? <Paint className={"chosen"} paint={foundPaint} onPaintClick={() => { }} /> : <span className="chosen"></span>;
}


export default App;
