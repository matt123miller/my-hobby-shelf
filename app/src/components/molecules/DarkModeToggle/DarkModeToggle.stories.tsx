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

type StorybookComponent = ComponentStory<typeof DarkModeToggle>;

export const Basic: StorybookComponent = () => <DarkModeToggle />;

export const VisibleBackground: StorybookComponent = () => (
  <div className="bg-slate-100 dark:bg-slate-700">
    <p>BG colour will be slate-100 in light mode, slate-700 in dark mode</p>
    <DarkModeToggle />
  </div>
);
