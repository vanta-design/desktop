import { createContext, type Dispatch, type SetStateAction } from 'react';
import { createContextHook } from '@/utils/context-hook';

type MenuContextType = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export const useMenuContext = createContextHook(MenuContext);
