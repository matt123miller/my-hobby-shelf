import Color from 'colorjs.io';

export interface RGB {
  r: number;
  g: number;
  b: number;
  toString(): string;
}

export type PaintRecord = {
  name: string;
  svg: string;
  hexCode: string;
  filePath: string;
  colourjs?: Color;
};

export type PaintData = Array<PaintRecord>;
