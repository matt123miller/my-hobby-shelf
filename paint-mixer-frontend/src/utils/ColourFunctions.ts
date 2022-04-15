import Color from 'colorjs.io';
import allPaints from '../data';
import { PaintData, PaintRecord } from '../types';

export function findMostSimilarPaintToColour(colour: Color) {
  let closestPaint: PaintRecord = allPaints[0];
  let closestDelta: number = 1;

  // loop all paints, compare to input colour
  for (const paint of allPaints) {
    const delta: number = colour.deltaEJz(paint.colourjs);
    // console.log({ name: paint.name, delta });
    if (delta !== 0 && delta < closestDelta) {
      closestDelta = delta;
      closestPaint = paint;
    }
  }
  console.log({ closestDelta, closestPaint });
  return closestPaint;
}

export function findLeastSimilarPaintToColour(colour: Color) {
  let furthestPaint: PaintRecord = allPaints[0];
  let largestDelta: number = 0;

  // loop all paints, compare to input colour
  for (const paint of allPaints) {
    const delta: number = colour.deltaEJz(paint.colourjs);
    // console.log({ name: paint.name, delta });
    if (delta !== 1 && delta > largestDelta) {
      largestDelta = delta;
      furthestPaint = paint;
    }
  }
  console.log({ largestDelta, furthestPaint });
  return furthestPaint;
}

// export function findComplimentaryColour(colour: Color) {
// colour.
// }

// Lets ignore everything below here, define exactly what we need and nothing more.

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
