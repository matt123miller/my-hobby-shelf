import React, { useState, Fragment } from 'react';
import { PaintData } from '../types';

import Paint from './Paint';
import paintData from '../data';
import { hexToRgb, findComplimentaryColour, rgbToHex } from './ColourFunctions';

type Props = {
  chosenColour: string;
};

function findPaintsByHex(chosenHex, complimentaryHex, paints) {
  const foundPaint = paints.find((p) => p.hexCode === chosenHex) ?? null;

  // we have the comphex
  // find the colour with the closest hex value from paints
  const compRGB = hexToRgb(complimentaryHex.slice(1));

  // have { r, g, b } and an array of objects with paint.rgb = { r, g, b }

  // start with the closest red colour
  let nearestRed = 255; // or 0?
  const compR = compRGB.r;

  paints.forEach((p) => {
    const redDiff = Math.abs(p.rgb.r - compR);
    if (redDiff < nearestRed) {
      nearestRed = p.rgb.r;
    }
    console.log(nearestRed);
  });

  const chosenPaint = (
    <Paint className="chosen" paint={foundPaint} onPaintClick={() => {}} />
  );
  const complimentaryPaint = (
    <Paint className="chosen" paint={foundPaint} onPaintClick={() => {}} />
  );

  return {
    chosenPaint,
    complimentaryPaint,
  };
}

export default function ComplimentaryColours(props: Props) {
  const { chosenColour } = props;

  // set to the opposite of our chosen colour
  const colourAsRgb = hexToRgb(chosenColour.slice(1));

  const { r, g, b } = findComplimentaryColour(colourAsRgb);
  const complimentaryColour = rgbToHex(r, g, b);

  const { chosenPaint, complimentaryPaint } = findPaintsByHex(
    chosenColour,
    complimentaryColour,
    paintData
  );

  return (
    <div className="complimentary-colour-container">
      {chosenPaint}
      <ColourGradient
        chosenColour={chosenColour}
        complimentaryColour={complimentaryColour}
      />
      {complimentaryPaint}
    </div>
  );
}

function ColourGradient(chosenColour, complimentaryColour) {
  const swatchStyles = {
    background: `linear-gradient(90deg, ${chosenColour} 0%, ${chosenColour} 40%, ${complimentaryColour} 60%)`,
  };
  return <div className="colour-swatch" style={swatchStyles} />;
}
