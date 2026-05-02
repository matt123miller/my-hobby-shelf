import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaintDescription } from "./PaintDescription";
import { allPaints } from "../../../../prisma/data";
import { Paint } from "@prisma/client";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Paint Description",
  component: PaintDescription,
} as ComponentMeta<typeof PaintDescription>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PaintDescription> = (args) => (
  <PaintDescription {...args}></PaintDescription>
);

export const DefaultPaintDescription = Template.bind({});

const randomPaint =
  allPaints[Math.floor(Math.random() * (allPaints.length - 1))];

DefaultPaintDescription.args = {
  paint: randomPaint as Paint,
  className: "bg-gray-100",
};
