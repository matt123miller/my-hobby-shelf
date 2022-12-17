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
  range?: string;
  name: string;
  svg: string;
  hexCode: string;
  filePath: string;
  colourjs?: Color;
};

export type SharedProps<T = unknown> = React.PropsWithChildren<
  T & {
    className?: ClassValue;
  }
>;

export type SharedInputPropts<T> = SharedProps<
  T & {
    id?: string;
    name?: string;
  }
>;
