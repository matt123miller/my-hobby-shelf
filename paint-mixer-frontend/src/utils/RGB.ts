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

  static fromHexCode(hex: string): RGB {
    const hexColour: string = normaliseHexCode(hex);
    return new RGB(
      parseInt(hexColour.substr(0, 2), 16),
      parseInt(hexColour.substr(2, 2), 16),
      parseInt(hexColour.substr(4, 2), 16)
    );
  }

  toHex(): string {
    return `#${componentToHex(this.r)}${componentToHex(this.g)}${componentToHex(
      this.b
    )}`;
  }

  toString(): string {
    return `R: ${this.r}, G: ${this.g}, B: ${this.b}`;
  }
}
