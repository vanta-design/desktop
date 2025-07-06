import type { LucideIcon } from 'lucide-react';
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
} from 'react';

export type Option = {
  icon?: LucideIcon;
  label: string;
  value: string;
};

type DropdownContextType = {
  currentOption: Option | null;
  setCurrentOption: Dispatch<SetStateAction<Option | null>>;
};

export const DropdownContext = createContext({} as DropdownContextType);

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('DropdownContext not available');
  }

  return context;
}
