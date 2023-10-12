import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "./ProjectCard";

const meta = {
  title: "ProjectCard",
  component: ProjectCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        projectId: 1
    }
};
