import React, { MouseEventHandler, useState } from 'react';
import { PaintData } from '../types';

export default ThemePicker;

function ThemePicker(props: {}) {
  const moonEmoji = '🌜';
  const sunEmoji = '🌞';

  const [isDarkMode, changeTheme] = useState(false);

  const toggletheme = (event: any) => {
    document.body.classList.add('background-transition');
    document.body.classList.toggle('dark');
    changeTheme(!isDarkMode);
  };

  const useLightTheme = `Use Light Theme ${sunEmoji}`;
  const useDarkTheme = `Use Dark Theme ${moonEmoji}`;

  return (
    <button className="theme-picker" onClick={toggletheme}>
      {isDarkMode ? useLightTheme : useDarkTheme}
    </button>
  );
}
