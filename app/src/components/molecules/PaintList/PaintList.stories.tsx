import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { rawData as allPaints } from "../../../server/trpc/data";

import { PaintList } from "./PaintList";

export default {
  title: "Molecules/Paint List",
  component: PaintList,
};

export const Basic: ComponentStory<typeof PaintList> = () => (
  <PaintList paints={allPaints} />
);

export const BasicNoData: ComponentStory<typeof PaintList> = () => (
  <PaintList />
);
