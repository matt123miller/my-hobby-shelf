import React from "react";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoadingIcon } from "./LoadingIcon";
import type { LoadingIconProps } from "./LoadingIcon";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Loading Icon",
  component: LoadingIcon,
} as ComponentMeta<typeof LoadingIcon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LoadingIcon> = (args) => (
  <LoadingIcon {...args}></LoadingIcon>
);

export const DefaultLoadingIcon = Template.bind({});

DefaultLoadingIcon.args = {};
