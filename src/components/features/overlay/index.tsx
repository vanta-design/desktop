import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import type { OverlayComponent, OverlayContextType } from './types';

export function createOverlay<T>(Component: OverlayComponent<T>) {
  const OverlayContext = createContext<OverlayContextType | null>(null);
  let _setIsOpen: Dispatch<SetStateAction<boolean>> | null = null;

  function show() {
    _setIsOpen?.(true);
  }

  function hide() {
    _setIsOpen?.(false);
  }

  function OverlayRoot(props: T) {
    const [isOpen, setIsOpen] = useState(false);

    _setIsOpen = setIsOpen;

    const overlayRoot = document.getElementById('overlay-root');
    if (!overlayRoot) {
      console.warn('Overlay root not found');
      return null;
    }

    return isOpen
      ? createPortal(
          <OverlayContext value={{ isOpen, setIsOpen }}>
            <Component isOpen={isOpen} close={hide} {...props} />
          </OverlayContext>,
          overlayRoot,
        )
      : null;
  }

  return {
    Render: OverlayRoot,
    show,
    hide,
  };
}
