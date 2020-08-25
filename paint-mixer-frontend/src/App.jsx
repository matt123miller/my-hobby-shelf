import React, { useState } from 'react';

import { ColourPicker, PaintsList, ComplimentaryColours } from './components';
import paintData from './data';

import './App.css';

function App() {

    const [chosenColour, setColour] = useState('#000000');

    return (
        <div className="App">

            <ColourPicker number={1} chosenColour={chosenColour} setColour={setColour} />
            <ComplimentaryColours chosenColour={chosenColour}/>
            <PaintsList paintData={paintData} onPaintClick={setColour} />
        </div>
    );
}


export default App;
