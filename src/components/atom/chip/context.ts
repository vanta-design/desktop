import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
} from 'react';

type ChipGroupContextType<T extends string> = {
  currentValue: T | null;
  setCurrentValue: Dispatch<SetStateAction<T | null>>;
  onActive?: (value: T) => unknown;
};

export const ChipGroupContext = createContext<unknown>(null);
ChipGroupContext.displayName = 'ChipGroupContext';

export function useChipGroupContext<T extends string>() {
  const ctx = useContext(ChipGroupContext) as ChipGroupContextType<T> | null;
  if (!ctx) {
    throw new Error('useChipGroupContext must be used within a ChipGroup');
  }
  return ctx;
}
