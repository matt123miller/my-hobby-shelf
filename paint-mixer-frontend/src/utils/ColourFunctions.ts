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
      parseInt(a.substring(0, 2), 16) - parseInt(b.substring(0, 2), 16)
    );
    const green = Math.abs(
      parseInt(a.substring(2, 2), 16) - parseInt(b.substring(2, 2), 16)
    );
    const blue = Math.abs(
      parseInt(a.substring(4, 2), 16) - parseInt(b.substring(4, 2), 16)
    );
    return red + green + blue;
  }
  return 9999; // what was this for?
}

export function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.padStart(2, '0');
}

// It's all wrong, rely on colors.js instead.
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

  const closestColour = paintsOrderedByDelta[0];

  // returning react component like this seems sus
  return Paint({
    paint: {
      hexCode: closestColour.paint.hexCode,
      rgb: closestColour.paint.rgb,
      name: '',
      svg: '',
      filePath: '',
    },
    isList: false,
    onPaintClick: () => {},
  });
}
