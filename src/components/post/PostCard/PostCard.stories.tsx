import type { Meta, StoryObj } from "@storybook/react";
import PostCard from ".";

const meta: Meta<typeof PostCard> = {
  component: PostCard,
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Primary: Story = {
  render: () => <PostCard />,
};
