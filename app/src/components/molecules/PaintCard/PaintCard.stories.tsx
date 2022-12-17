import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaintCard } from "./PaintCard";
import { rawData as allPaints } from "../../../server/trpc/data";

export default {
  title: "Molecules/Paint Card",
  component: PaintCard,
};

const randomIndex = Math.floor(Math.random() * (allPaints.length - 1));
const randomPaint = allPaints[randomIndex]!;

export const Basic: ComponentStory<typeof PaintCard> = () => (
  <PaintCard paint={randomPaint} />
);
