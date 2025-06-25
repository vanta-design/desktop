import type { Decorator } from '@storybook/react-vite';
import { VantaProvider } from '../src/providers/vanta-root';

export const decorators: Array<Decorator> = [
  (Story, context) => {
    const theme = context.globals.theme || 'light';

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-accent', 'monochrome');

    return (
      <VantaProvider>
        <Story />
      </VantaProvider>
    );
  },
];
