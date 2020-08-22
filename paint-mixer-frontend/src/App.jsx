import React, { useState } from 'react';
import './App.css';

function App() {

    return (
        <div className="App">
            {
            [1,2,3].map(i => {
                return <ColourPicker number={i}/>
            })
            }
        </div>
    );
}

function ColourPicker(props) {

    const [chosenColour, setColour] = useState('#000000');
    
    const colourChangeEvent = (e) => {
        setColour(e.target.value);
    }
    return <div>
        <input type="color" name={`Colour${props.number}`} id={`Colour${props.number}`} onChange={colourChangeEvent} />
        <div><span style={{ color: chosenColour }}>{chosenColour}</span></div>
    </div>
} 

export default App;
