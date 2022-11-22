import React from "react";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";
import type { CardProps } from "./Card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <h1>Card contents</h1>
  </Card>
);

const onClick: CardProps["onClick"] = (
  event: React.MouseEvent<HTMLElement>
) => {
  console.log("Component clicked", event);
};

export const InteractiveCard = Template.bind({});

InteractiveCard.args = {
  id: "Card",
  name: "interactive-input",
  cardClasses: "hover:bg-slate-100",
  onClick,
};

// export const CheckedInput = Template.bind({});

// CheckedInput.args = {
//   id: "CheckedInput",
//   name: "checked-input",
//   onClick,
// };

// export const UncheckedInput = Template.bind({});

// UncheckedInput.args = {
//   id: "UncheckedInput",
//   name: "unchecked-input",
//   onClick,
// };
