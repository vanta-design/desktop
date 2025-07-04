import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { wrapper } from './styles.css';

export type Theme = 'light' | 'dark' | 'darkest';

interface ThemeProviderProps extends PropsWithChildren {
  theme?: Theme;
  defaultTheme?: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { theme, defaultTheme, children } = props;

  const [currentTheme, setCurrentTheme] = useState(
    theme || defaultTheme || 'light',
  );

  const handleMediaChange = useCallback((e: MediaQueryListEvent) => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    setCurrentTheme(newColorScheme);
  }, []);

  useEffect(() => {
    setCurrentTheme(theme || 'light');
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addEventListener('change', handleMediaChange);

    return media.removeEventListener('change', handleMediaChange);
  }, [handleMediaChange]);

  return (
    <div className={wrapper} data-theme={currentTheme}>
      {children}
    </div>
  );
}
