import { RGB as _RGB } from '../types';
import { componentToHex, normaliseHexCode } from './ColourFunctions';

export default class RGB implements _RGB {
  r: number;

  g: number;

  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  /**
   * Creates an RGB instance from a hex code.
   * It can begin with # or not, but the numeric elements
   * should still be a valid 3 or 6 chararcter hex code.
   */
  static fromHexCode(hex: string): RGB {
    const hexColour: string = normaliseHexCode(hex);
    return new RGB(
      parseInt(hexColour.substring(0, 2), 16),
      parseInt(hexColour.substring(2, 2), 16),
      parseInt(hexColour.substring(4, 2), 16)
    );
  }

  /**
   * Returns an RGB colour that's theoretically opposite on the colour wheel in RGB space.
   */
  static findComplimentaryRGB(input: _RGB) {
    return new RGB(255 - input.r, 255 - input.g, 255 - input.b);
  }

  toHex(): string {
    const r = componentToHex(this.r);
    const g = componentToHex(this.g);
    const b = componentToHex(this.b);
    return `#${r}${g}${b}`;
  }

  toString(): string {
    return `R: ${this.r}, G: ${this.g}, B: ${this.b}`;
  }
}
