import type { Meta, StoryObj } from "@storybook/react";
import Category from ".";

const meta: Meta<typeof Category> = {
  component: Category,
};

export default meta;
type Story = StoryObj<typeof Category>;

export const Primary: Story = {
  render: () => <Category />,
};
