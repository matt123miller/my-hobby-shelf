import React, { useState } from 'react';
import Color from 'colorjs.io';

import { PaintsList } from './components';
import paintData from './data';

import './App.css';

export default function App() {
  const [chosenColour, setColour] = useState('#000000');
  // @ts-ignore
  // global.Color = Color;
  return (
    <main className="paint-picker-app m-4">
      <h1 className="text-center text-4xl">Painting Colour Assistant</h1>
      <PaintsList paintData={paintData} />
    </main>
  );
}
