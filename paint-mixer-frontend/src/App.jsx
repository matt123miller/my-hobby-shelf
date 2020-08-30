import React, { useState } from 'react';

import { ColourPicker, PaintsList, ComplimentaryColours } from './components';
import paintData from './data';

import './App.css';

function App() {

    const [chosenColour, setColour] = useState('#000000');

    return (
        <div className="App">

            <header>
                <h1>Painting Assistant change detected?</h1>
                <ColourPicker number={1} chosenColour={chosenColour} setColour={setColour} />
                <ComplimentaryColours chosenColour={chosenColour} />
            </header>
            <hr />
            <main>
                <PaintsList paintData={paintData} onPaintClick={setColour} />
            </main>
        </div>
    );
}


export default App;
