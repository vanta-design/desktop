import type { Decorator, Preview } from '@storybook/react-vite';
import { VantaProvider } from '../src/providers/vanta-root';

const overlayRootId = 'overlay-root';

export const decorators: Array<Decorator> = [
  (Story, context) => {
    const theme = context.globals.theme || 'dark';
    const accent = context.globals.accent || 'monochrome';

    return (
      <>
        <VantaProvider defaultTheme={theme} defaultAccent={accent}>
          <Story />
        </VantaProvider>
        <div id={overlayRootId} />
      </>
    );
  },
];

const preview: Preview = {
  globalTypes: {
    theme: {
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark', 'darkest'],
        dynamicTitle: true,
      },
    },
    accent: {
      toolbar: {
        title: 'Accent',
        icon: 'circlehollow',
        items: ['monochrome', 'green', 'blue', 'indigo'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    accent: 'monochrome',
  },
};

export default preview;
