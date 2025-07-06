import { type PropsWithChildren, useEffect } from 'react';
import '@/styles/accent.css';

export type Accent = 'monochrome' | 'green' | 'blue' | 'indigo';

interface AccentProviderProps extends PropsWithChildren {
  accent?: Accent;
}

export function AccentProvider(props: AccentProviderProps) {
  const { accent = 'monochrome', children } = props;

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  return children;
}
