import Color from "colorjs.io";
import type { Paint, ExtendedPaint } from "@typing";
import { ColourSpace } from "@typing";

export function ParseColourInfo(paint: Paint): ExtendedPaint {
  const parsed = Color.parse(paint.hexCode);

  const colourjs = new Color("lab", parsed.coords, 1);

  (paint as ExtendedPaint).colourjs = colourjs;

  return paint;
}
