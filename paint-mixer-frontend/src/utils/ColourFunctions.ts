import Color from 'colorjs.io';
import allPaints from '../data';
import { PaintData, PaintRecord } from '../types';

/**
 * Because there's some strange colours chosen by colorio.js.deltaEJz sometimes
 * maybe I need to investigate using an alternate colour space? Or another delta function?
 * Even if it has some problems this is still much better!
 */

/**
 * Relies on the colourjs.io `deltaEJz` function for finding whichever paint
 * has the smallest, non-zero, delta to the provided colour. Non-zero because
 * if it has a delta of 0 that's the same colour.
 * @param colour
 * Provide an instance of colorjs.io.
 * Anything implementing `PaintRecord` will have a `colourjs` value attached
 * with an instance already created for that specific paint.
 * @returns
 * The closest paint to whatever colourjs.io instance you provide.
 */
export function findMostSimilarPaintToColour(colour: Color): PaintRecord {
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

/**
 * Relies on the colourjs.io `deltaEJz` function for finding whichever paint
 * has the largest, non-1, delta to the provided colour. Non-1 because
 * if it has a delta of 1 that's the same colour.
 * @param colour
 * Provide an instance of colorjs.io.
 * Anything implementing `PaintRecord` will have a `colourjs` value attached
 * with an instance already created for that specific paint.
 * @returns
 * The most different paint to whatever colourjs.io instance you provide.
 * This should be the paint opposite on the colour wheel
 */
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
