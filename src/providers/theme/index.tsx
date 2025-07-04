import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { wrapper } from './styles.css';
import '@/styles/theme.css';

export type Theme = 'light' | 'dark' | 'darkest';

interface ThemeProviderProps extends PropsWithChildren {
  theme?: Theme;
  defaultTheme?: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { theme, defaultTheme, children } = props;

  const media = useRef(window.matchMedia('(prefers-color-scheme: dark)'));
  const fallbackTheme = media.current.matches ? 'dark' : 'light';
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
    media.current.addEventListener('change', handleMediaChange);

    return media.current.removeEventListener('change', handleMediaChange);
  }, [handleMediaChange]);

  return (
    <div className={wrapper} data-theme={currentTheme}>
      {children}
    </div>
  );
}
