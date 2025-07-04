import type { PropsWithChildren } from 'react';
import { wrapper } from './styles.css';

export type Accent = 'monochrome' | 'green' | 'blue' | 'indigo';

interface AccentProviderProps extends PropsWithChildren {
  accent?: Accent;
}

export function AccentProvider(props: AccentProviderProps) {
  const { accent = 'monochrome', children } = props;

  return (
    <div className={wrapper} data-accent={accent}>
      {children}
    </div>
  );
}
