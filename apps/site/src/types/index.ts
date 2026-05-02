import type { Paint as PaintRecord } from "@prisma/client";
import type { ClassValue } from "clsx";
import type Color from "colorjs.io";
import type React from "react";

export type ColourSpace = "lch";

export interface RGB {
  r: number;
  g: number;
  b: number;
  toString(): string;
}

export type Paint = Omit<PaintRecord, "id" | "createdAt" | "updatedAt">;

export type MinimalPaint = Pick<Paint, "name" | "hexCode">;

export type ExtendedPaint = PaintRecord & {
  range?: string;
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
