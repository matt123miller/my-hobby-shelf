import { PaintData } from "../types";

import Paint from "./Paint";
import paintData from "../data";
import { findComplimentaryColour } from "../utils/ColourFunctions";
import RGB from "../utils/RGB";

function findPaintsByHex(
  chosenHex: string,
  complimentaryHex: string,
  paints: PaintData
) {
  const foundPaint = paints.find((p) => p.hexCode === chosenHex);

  // we have the comphex
  // find the colour with the closest hex value from paints
  const compRGB = RGB.fromHexCode(complimentaryHex.slice(1));

  // have { r, g, b } and an array of objects with paint.rgb = { r, g, b }

  // start with the closest red colour
  let nearestRed = 255; // or 0?
  const compR = compRGB.r;

  paints.forEach((p) => {
    const redDiff = Math.abs(p.rgb.r - compR);
    if (redDiff < nearestRed) {
      nearestRed = p.rgb.r;
    }
  });

  const chosenPaint = <Paint paint={foundPaint} onPaintClick={() => {}} />;
  const complimentaryPaint = (
    <Paint paint={foundPaint} onPaintClick={() => {}} />
  );

  return {
    chosenPaint,
    complimentaryPaint,
  };
}

type ComplimentaryColoursProps = {
  chosenColour: string;
};

export default function ComplimentaryColours(props: ComplimentaryColoursProps) {
  const { chosenColour } = props;

  // set to the opposite of our chosen colour
  const colourAsRgb = RGB.fromHexCode(chosenColour.slice(1));
  const complimentaryColour: string =
    findComplimentaryColour(colourAsRgb).toHex();

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

function ColourGradient(chosenColour: any, complimentaryColour: any) {
  const swatchStyles = {
    background: `linear-gradient(90deg, ${chosenColour} 0%, ${chosenColour} 40%, ${complimentaryColour} 60%)`,
  };
  return <div className="colour-swatch" style={swatchStyles} />;
}
