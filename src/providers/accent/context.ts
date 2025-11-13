import { createContext } from 'react';

export type Accent = 'monochrome' | 'green' | 'blue' | 'indigo';

type AccentContextType = {
  accent: Accent;
  setAccent: (accent: Accent) => void;
};

export const AccentContext = createContext<AccentContextType | null>(null);
AccentContext.displayName = 'AccentContext';
