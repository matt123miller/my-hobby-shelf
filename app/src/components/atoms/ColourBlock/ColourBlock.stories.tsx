import React from "react";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { ColourBlock } from "./ColourBlock";
import type { ColourBlockProps } from "./ColourBlock";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Colour Block",
  component: ColourBlock,
} as ComponentMeta<typeof ColourBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ColourBlock> = (args) => (
  <ColourBlock {...args}></ColourBlock>
);

export const DefaultColourBlock = Template.bind({});

DefaultColourBlock.args = {
  colour: "rgb(71, 18, 90)",
  className: "text-white",
};
