import { createContext } from 'react';

type ControlGroupContextType = {
  name?: string;
};

export const ControlGroupContext = createContext({} as ControlGroupContextType);
