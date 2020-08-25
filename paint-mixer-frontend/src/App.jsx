import React from 'react';

import { ColourPicker } from './components';

import './App.css';
import data from './data';

function App() {

    console.log(data);
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


export default App;
