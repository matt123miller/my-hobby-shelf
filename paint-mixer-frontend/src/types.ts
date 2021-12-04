export interface RGB {
  r: number;
  g: number;
  b: number;
  toString(): string;
};

export type PaintRecord = {
  name: string;
  svg: string;
  hexCode: string;
  filePath: string;
  rgb: RGB;
};

export type PaintData = Array<PaintRecord>;
