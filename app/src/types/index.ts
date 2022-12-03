import type React from "react";
import type { ClassValue } from "clsx";
import type Color from "colorjs.io";

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
