import { createContext } from 'react';
import { createContextHook } from '@/utils/context-hook';

type ControlGroupContextType = {
  name?: string;
};

export const ControlGroupContext =
  createContext<ControlGroupContextType | null>(null);

export const useControlGroupContext = createContextHook(ControlGroupContext);
