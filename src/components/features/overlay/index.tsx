import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import type { OverlayComponent, OverlayContextType } from './types';

export function createOverlay(Component: OverlayComponent) {
  const OverlayContext = createContext<OverlayContextType | null>(null);
  let _setIsOpen: Dispatch<SetStateAction<boolean>> | null = null;

  function show() {
    _setIsOpen?.(true);
  }

  function hide() {
    _setIsOpen?.(false);
  }

  function OverlayRoot() {
    const [isOpen, setIsOpen] = useState(false);

    _setIsOpen = setIsOpen;

    const overlayRoot = document.getElementById('overlay-root');
    if (!overlayRoot) {
      throw new Error('Overlay root element not found.');
    }

    return createPortal(
      <OverlayContext value={{ isOpen, setIsOpen }}>
        <Component isOpen={isOpen} close={hide} />
      </OverlayContext>,
      overlayRoot,
    );
  }

  return {
    render: OverlayRoot,
    show,
    hide,
  };
}
