import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import '@/styles/theme.css';
import { type Theme, ThemeContext } from './context';

interface ThemeProviderProps extends PropsWithChildren {
  defaultTheme?: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { defaultTheme, children } = props;

  const fallbackTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const [theme, setTheme] = useState(defaultTheme || fallbackTheme);

  const handleMediaChange = useCallback((e: MediaQueryListEvent) => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    setTheme(newColorScheme);
  }, []);

  useEffect(() => {
    setTheme(defaultTheme || fallbackTheme);
  }, [defaultTheme, fallbackTheme]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleMediaChange);

    return window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', handleMediaChange);
  }, [handleMediaChange]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
