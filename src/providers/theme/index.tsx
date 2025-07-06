import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import '@/styles/theme.css';

export type Theme = 'light' | 'dark' | 'darkest';

interface ThemeProviderProps extends PropsWithChildren {
  theme?: Theme;
  defaultTheme?: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { theme, defaultTheme, children } = props;

  const fallbackTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const [currentTheme, setCurrentTheme] = useState(
    theme || defaultTheme || fallbackTheme,
  );

  const handleMediaChange = useCallback((e: MediaQueryListEvent) => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    setCurrentTheme(newColorScheme);
  }, []);

  useEffect(() => {
    setCurrentTheme(theme || fallbackTheme);
  }, [theme, fallbackTheme]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleMediaChange);

    return window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', handleMediaChange);
  }, [handleMediaChange]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return children;
}
