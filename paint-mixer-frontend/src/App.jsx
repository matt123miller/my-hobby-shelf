import React, { useState } from 'react';

import { ColourPicker,PaintsList } from './components';

import './App.css';
import paintData from './data';

function App() {

    const [chosenColour, setColour] = useState('#000000');


    return (
        <div className="App">
            <ColourPicker number={1} chosenColour={chosenColour} setColour={setColour} />

            <PaintsList paintData={paintData} onPaintClick={setColour} />
        </div>
    );
}


export default App;
