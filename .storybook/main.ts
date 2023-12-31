import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path';

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.mdx',
        // "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-themes'
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    staticDirs: ['../public'],
    webpackFinal: async (config, { configType }) => {
        if (!config.resolve) {
            return config;
        }

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../')
        };

        return config;
    }
};
export default config;
