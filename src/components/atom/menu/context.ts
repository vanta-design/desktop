import {
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react';
import { createContextHook } from '@/utils/context-hook';

type MenuContextType = {
  show: boolean;
  listRef: RefObject<HTMLElement | null>;
  triggerRef: RefObject<HTMLElement | null>;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType | null>(null);
MenuContext.displayName = 'MenuContext';

export const useMenuContext = createContextHook(MenuContext);
