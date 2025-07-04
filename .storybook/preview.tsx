import type { Decorator } from '@storybook/react-vite';
import { VantaProvider } from '../src/providers/vanta-root';
import { fill } from '../src/tokens/color.css';

export const decorators: Array<Decorator> = [
  (Story, context) => {
    const theme = context.globals.theme || 'dark';

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-accent', 'monochrome');
    document.body.style.backgroundColor = fill.surface.base;

    return (
      <VantaProvider>
        <Story />
      </VantaProvider>
    );
  },
];
