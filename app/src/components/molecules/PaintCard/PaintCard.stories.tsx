import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaintCard } from "./PaintCard";
import { allPaints } from "../../../../prisma/data";
import { Paint } from "@prisma/client";
import { DarkModeToggle } from "../DarkModeToggle";

export default {
  title: "Molecules/Paint Card",
  component: PaintCard,
};

const randomIndex = Math.floor(Math.random() * (allPaints.length - 1));
const randomPaint = allPaints[randomIndex]! as Paint;

type StorybookComponent = ComponentStory<typeof PaintCard>;

export const Basic: StorybookComponent = () => (
  <PaintCard paint={randomPaint} />
);

export const DarkMode: StorybookComponent = () => (
  <div className="mx-auto flex min-h-screen flex-col flex-wrap items-center justify-center bg-slate-100 text-black dark:bg-slate-700 dark:text-white">
    <DarkModeToggle />
    <p className="mb-16">Molecules/Paint Card</p>
    <div className="paint-grid grid w-full content-center gap-4 p-8">
      <PaintCard paint={randomPaint} />
      <PaintCard paint={randomPaint} />
      <PaintCard paint={randomPaint} />
      <PaintCard paint={randomPaint} />
      <PaintCard paint={randomPaint} />
    </div>
  </div>
);
