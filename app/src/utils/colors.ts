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

  // console.log(extendedPaint);

  return extendedPaint;
}
