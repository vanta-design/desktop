import type { Decorator, Preview } from '@storybook/react-vite';
import { AccentProvider } from '../src/providers/accent';
import { ThemeProvider } from '../src/providers/theme';
import { VantaProvider } from '../src/providers/vanta-root';
import { fill } from '../src/tokens/color.css';

const overlayRootId = 'overlay-root';

export const decorators: Array<Decorator> = [
  (Story, context) => {
    const theme = context.globals.theme || 'dark';
    const accent = context.globals.accent || 'monochrome';

    document.body.style.backgroundColor = fill.surface.base;

    return (
      <>
        <VantaProvider>
          <ThemeProvider defaultTheme={theme}>
            <AccentProvider defaultAccent={accent}>
              <Story />
            </AccentProvider>
          </ThemeProvider>
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
