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
  defaultValue?: string;
  currentOption: Option | null;
  isExpanded: boolean;
  onCurrentOptionChange: (option: Option | null) => void;
  setCurrentOption: Dispatch<SetStateAction<Option | null>>;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
};

export const DropdownContext = createContext({} as DropdownContextType);
DropdownContext.displayName = 'DropdownContext';

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('DropdownContext not available');
  }

  return context;
}
