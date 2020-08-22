import React from 'react';

import { ColourPicker, Paint } from './components';

import './App.css';

function App() {

    return (
        <div className="App">
            {
                [1,2,3].map(i => {
                    return <ColourPicker number={i}/>
                })
            }
            {/* <Paint /> */}
        </div>
    );
}


export default App;
