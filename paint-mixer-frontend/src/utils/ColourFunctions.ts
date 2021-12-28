import allPaints from '../data';
import { Paint } from '../components';
import { PaintData, PaintRecord } from '../types';
import RGB from './RGB';

export function normaliseHexCode(hex: string) {
  let hexColour: string = hex;
  if (hexColour[0] === '#') {
    hexColour = hexColour.slice(1);
  }

  if (hexColour.length === 3) {
    hexColour = hexColour
      .split('')
      .map((h) => h + h)
      .join('');
  }
  return hexColour;
}
/**
 *
 */
export function compareColour(colourA: string, colourB: string) {
  const a = normaliseHexCode(colourA);
  const b = normaliseHexCode(colourB);
  if (b.length === 6) {
    const red = Math.abs(
      parseInt(a.substr(0, 2), 16) - parseInt(b.substr(0, 2), 16)
    );
    const green = Math.abs(
      parseInt(a.substr(2, 2), 16) - parseInt(b.substr(2, 2), 16)
    );
    const blue = Math.abs(
      parseInt(a.substr(4, 2), 16) - parseInt(b.substr(4, 2), 16)
    );
    return red + green + blue;
  }
  return 9999; // what was this for?
}

export function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.padStart(2, '0');
}

export function findClosestPaintByHex(searchRgb: RGB) {
  // start with the closest red colour
  const nearestRed = 255; // or 0?

  const paintsOrderedByDelta = allPaints
    .map((p) => {
      // Is using math.abs going to cause issues? Are the negative values useful?
      const redDelta = Math.abs(p.rgb.r - searchRgb.r);
      const greenDelta = Math.abs(p.rgb.g - searchRgb.g);
      const blueDelta = Math.abs(p.rgb.b - searchRgb.b);
      const totalDelta = redDelta + greenDelta + blueDelta;

      return {
        totalDelta,
        paint: p,
      };
    })
    .sort((a, b) => a.totalDelta - b.totalDelta);

  console.log(paintsOrderedByDelta);

  // returning react component like this seems sus
  return Paint({
    paint: {
      hexCode: searchRgb.toHex(),
      rgb: searchRgb,
      name: '',
      svg: '',
      filePath: '',
    },
    isList: false,
    onPaintClick: () => {},
  });
}
