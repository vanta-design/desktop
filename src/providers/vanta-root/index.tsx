import '@/styles/reset.css';
import '@/styles/token.css';
import type { PropsWithChildren } from 'react';
import { AccentProvider } from '../accent';
import type { Accent } from '../accent/context';
import { ThemeProvider } from '../theme';
import type { Theme } from '../theme/context';

interface VantaProviderProps extends PropsWithChildren {
  defaultTheme?: Theme;
  defaultAccent?: Accent;
}

export function VantaProvider(props: VantaProviderProps) {
  const { defaultTheme, defaultAccent, children } = props;

  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <AccentProvider defaultAccent={defaultAccent}>{children}</AccentProvider>
    </ThemeProvider>
  );
}
