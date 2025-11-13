import { createContext, type Dispatch, type SetStateAction } from 'react';
import { createContextHook } from '@/utils/context-hook';

type TabsContextType = {
  selected: string;
  orientation: 'horizontal' | 'vertical';
  setSelected: Dispatch<SetStateAction<string>>;
};

export const TabsContext = createContext<TabsContextType | null>(null);
TabsContext.displayName = 'TabsContext';

export const useTabsContext = createContextHook(TabsContext);
