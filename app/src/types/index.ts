import type React from "react";
import type { ClassValue } from "clsx";
import type Color from "colorjs.io";
import type { Paint as PaintRecord } from "@prisma/client";

export type ColourSpace = "lab";

export interface RGB {
  r: number;
  g: number;
  b: number;
  toString(): string;
}

export type Paint = Omit<PaintRecord, "id" | "createdAt" | "updatedAt">;

export type ExtendedPaint = Paint & {
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
