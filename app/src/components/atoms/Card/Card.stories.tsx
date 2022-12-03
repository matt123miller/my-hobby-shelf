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
const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

const onClick: CardProps["onClick"] = (
  event: React.MouseEvent<HTMLElement>
) => {
  console.log("Component clicked", event);
};

export const DefaultCard = Template.bind({});

DefaultCard.args = {
  id: "Card",
  name: "default-card",
  cardClasses: "",
  onClick,
  children: <h1>Default card</h1>,
};

export const InteractiveCard = Template.bind({});

InteractiveCard.args = {
  id: "Card",
  name: "interactive-card",
  cardClasses: "hover:bg-slate-100",
  onClick,
  children: <h1>Hover is only added in this story for testing</h1>,
};

const ListTemplate: ComponentStory<typeof Card> = (args) => (
  <>
    <p>This is only here to ensure nothing crazy happens</p>
    <p>
      The styling of a list and it's elements should be done elsewhere, not in
      the card
    </p>
    <ul>
      <li>
        <Card {...args}></Card>
      </li>
      <li>
        <Card {...args}></Card>
      </li>
      <li>
        <Card {...args}></Card>
      </li>
    </ul>
  </>
);

export const HoverableListCard = ListTemplate.bind({});

HoverableListCard.args = {
  id: "Card",
  name: "interactive-card",
  cardClasses: "hover:bg-slate-100",
  onClick,
  children: <p>Wrapped in an ul &gt; li</p>,
};
