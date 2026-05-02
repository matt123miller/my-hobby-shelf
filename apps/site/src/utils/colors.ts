import type { ExtendedPaint, Paint } from "@typing";
import Color from "colorjs.io";

const unwrapCoord = (coord: number | undefined): number => {
  if (coord === undefined || Number.isNaN(coord)) {
    // better than nothing for now
    return 0;
  }
  return Number(coord.toFixed(3));
};

export function parseColourInfo(paint: Paint): ExtendedPaint {
  const colourjs = new Color(paint.hexCode);
  // const colourjs = new Color(paint.hexCode).to('lch');
  const extendedPaint = paint as ExtendedPaint;

  extendedPaint.colourjs = colourjs;
  extendedPaint.luminance = unwrapCoord(colourjs.lch.l);
  extendedPaint.chroma = unwrapCoord(colourjs.lch.c);
  extendedPaint.hue = unwrapCoord(colourjs.lch.h);

  return extendedPaint;
}

export function calculateColorDistance(paint1: Paint, paint2: Paint): number {
  const hueDiff = paint1.hue - paint2.hue;
  const chromaDiff = paint1.chroma - paint2.chroma;
  const luminanceDiff = paint1.luminance - paint2.luminance;
  return Math.sqrt(
    hueDiff * hueDiff + chromaDiff * chromaDiff + luminanceDiff * luminanceDiff
  );
}

export function findClosestPaint(
  paintsList: Paint[],
  targetPaint: Paint
): Paint | null {
  if (paintsList.length === 0) return null;

  let closestPaint = paintsList[0]!;
  let smallestDistance = calculateColorDistance(closestPaint, targetPaint);

  for (const paint of paintsList) {
    const distance = calculateColorDistance(paint, targetPaint);
    if (distance < smallestDistance) {
      closestPaint = paint;
      smallestDistance = distance;
    }
  }

  return closestPaint;
}
