import React from "react";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputToggle } from "./InputToggle";
import type { InputToggleProps } from "./InputToggle";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Input Toggle Slider",
  component: InputToggle,
} as ComponentMeta<typeof InputToggle>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputToggle> = (args) => (
  <InputToggle {...args} />
);

export const InteractiveInputToggle = Template.bind({});

InteractiveInputToggle.args = {
  id: "InputToggle",
  name: "interactive-input",
  onChange: (value: boolean) => {
    console.log("Clicking the toggle. New value: ", value);
  },
};

export const CheckedInput = Template.bind({});

CheckedInput.args = {
  id: "CheckedInput",
  name: "checked-input",
  checked: true,
  onChange: (value: boolean) => {
    console.log("Clicking the toggle. New value: ", value);
  },
};

export const UncheckedInput = Template.bind({});

UncheckedInput.args = {
  id: "UncheckedInput",
  name: "unchecked-input",
  checked: false,
  onChange: (value: boolean) => {
    console.log("Clicking the toggle. New value: ", value);
  },
};
