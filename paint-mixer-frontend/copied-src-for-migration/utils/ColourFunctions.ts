import { RGB } from '../types';

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

export function findComplimentaryColour({ r, g, b }: RGB) {
  return {
    r: 255 - r,
    g: 255 - g,
    b: 255 - b,
  };
}

export function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.padStart(2, '0');
}

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}
/**
 * Supports hex strings beginning with # or not and shorthand values like fff
 */
export function hexToRgb(hex: string): RGB {
  const hexColour: string = normaliseHexCode(hex);
  return {
    r: parseInt(hexColour.substr(0, 2), 16),
    g: parseInt(hexColour.substr(2, 2), 16),
    b: parseInt(hexColour.substr(4, 2), 16),
  };
}
