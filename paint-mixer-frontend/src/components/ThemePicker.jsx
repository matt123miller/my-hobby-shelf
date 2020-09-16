import React from 'react';


export default ThemePicker


function ThemePicker(props) {

    const moonEmoji = '🌜';


    const toggletheme = (event) => {

        document.body.classList.toggle('dark');
    }

    return <div>
        <button onClick={toggletheme}>Dark mode? {moonEmoji}</button>
    </div>
}