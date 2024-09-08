import type { ComponentStory } from "@storybook/react";

import { allPaints } from "../../../../prisma/data";

import { PaintList } from "./PaintList";
// import { DarkModeToggle } from "../DarkModeToggle";

export default {
  title: "Molecules/Paint List",
  component: PaintList,
};

type StorybookComponent = ComponentStory<typeof PaintList>;

export const Basic: StorybookComponent = () => (
  <PaintList paints={allPaints as any} />
);

export const BasicNoData: StorybookComponent = () => <PaintList />;

export const DarkMode: StorybookComponent = () => (
  <div className="mx-auto flex min-h-screen flex-col flex-wrap items-center justify-center bg-slate-100 text-black dark:bg-slate-700 dark:text-white">
    {/* <DarkModeToggle /> */}
    <PaintList paints={allPaints as any} />
  </div>
);
