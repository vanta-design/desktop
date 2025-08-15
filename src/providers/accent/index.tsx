import { type PropsWithChildren, useEffect, useState } from 'react';
import '@/styles/accent.css';
import { type Accent, AccentContext } from './context';

interface AccentProviderProps extends PropsWithChildren {
  defaultAccent?: Accent;
}

export function AccentProvider(props: AccentProviderProps) {
  const { defaultAccent = 'monochrome', children } = props;
  const [accent, setAccent] = useState<Accent>(defaultAccent);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  return (
    <AccentContext value={{ accent, setAccent }}>{children}</AccentContext>
  );
}
