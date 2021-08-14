import React, { useState } from 'react';

import { ColourPicker, PaintsList, ComplimentaryColours } from './components';
import paintData from './data';

import './App.css';

function App() {
  const [chosenColour, setColour] = useState('#000000');

  return (
    <div className="">
      <header>
        <h1>Painting Colour Assistant</h1>
        {/* <ColourPicker chosenColour={chosenColour} setColour={setColour} /> */}
        <div className="colour-details-container m3">
          <ComplimentaryColours
            className="centre"
            chosenColour={chosenColour}
          />
        </div>
      </header>
      <hr />
      <main>
        <PaintsList paintData={paintData} onPaintClick={setColour} />
      </main>
    </div>
  );
}

export default App;
