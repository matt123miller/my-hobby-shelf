import React from "react";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { DarkModeToggle } from "./DarkModeToggle";
import type { Theme } from "./DarkModeToggle";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules/Dark Mode Toggle",
  component: DarkModeToggle,
} as ComponentMeta<typeof DarkModeToggle>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DarkModeToggle> = () => (
  <div className="bg-slate-100 dark:bg-slate-700">
    <p>BG colour will be slate-100 in light mode, slate-700 in dark mode</p>
    <DarkModeToggle />
  </div>
);

export const DefaultDarkModeToggle = Template.bind({});

DefaultDarkModeToggle.args = {
  onChange: (value: Theme) => {
    console.log("Toggling theme to: ", value);
  },
};

// export const CheckedInput = Template.bind({});

// CheckedInput.args = {
//   id: "CheckedInput",
//   name: "checked-input",
//   checked: true,
//   onChange: (value: boolean) => {
//     console.log("Clicking the toggle. New value: ", value);
//   },
// };

// export const UncheckedInput = Template.bind({});

// UncheckedInput.args = {
//   id: "UncheckedInput",
//   name: "unchecked-input",
//   checked: false,
//   onChange: (value: boolean) => {
//     console.log("Clicking the toggle. New value: ", value);
//   },
// };
