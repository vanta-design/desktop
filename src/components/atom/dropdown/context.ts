import type { LucideIcon } from 'lucide-react';
import { createContext, type Dispatch, type SetStateAction } from 'react';

export type Option = {
  icon?: LucideIcon;
  label: string;
  value: string;
};

type DropdownContextType = {
  currentValue: Option | null;
  setCurrentValue: Dispatch<SetStateAction<Option | null>>;
};

export const DropdownContext = createContext({} as DropdownContextType);
