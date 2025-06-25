import { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { type InlineConfig, mergeConfig } from 'vite';

const currentPath = new URL('.', import.meta.url).pathname;

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    const overrides: InlineConfig = {
      resolve: {
        alias: {
          '@': resolve(currentPath, '../src'),
        },
      },
      plugins: [vanillaExtractPlugin()],
    };

    return mergeConfig(config, overrides);
  },
};

export default config;
