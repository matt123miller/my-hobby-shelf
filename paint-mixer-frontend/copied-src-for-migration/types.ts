export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type PaintRecord = {
  name: string;
  svg: string;
  hexCode: string;
  filePath: string;
  rgb: RGB;
};

export type PaintData = Array<PaintRecord>;
