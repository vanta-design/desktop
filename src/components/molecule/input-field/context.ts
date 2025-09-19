import { createContext } from 'react';
import { createContextHook } from '@/utils/context-hook';

type InputFieldContextType = {
  optional: boolean;
};

export const InputFieldContext = createContext<InputFieldContextType | null>(
  null,
);

export const useInputFieldContext = createContextHook(InputFieldContext);
