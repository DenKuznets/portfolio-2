import type { Meta, StoryObj } from '@storybook/react';
import { MyLink, MyLinkProps } from './MyLink';

const meta = {
    title: 'MyLink',
    component: MyLink,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} satisfies Meta<typeof MyLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default link'
    }
};
export const Violet: Story = {
    args: {
        children: 'Violet link',
        violet: true
    }
};
