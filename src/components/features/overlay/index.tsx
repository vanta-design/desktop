import {
  type ComponentType,
  createContext,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import type { OverlayComponent, OverlayContextType } from './types';

export function useOverlay<T>(Component: OverlayComponent<T>) {
  const setOpenRef = useRef<Dispatch<SetStateAction<boolean>> | null>(null);

  const show = useCallback(() => setOpenRef.current?.(true), []);
  const hide = useCallback(() => setOpenRef.current?.(false), []);

  const Context = useMemo(
    () => createContext<OverlayContextType | null>(null),
    [],
  );

  const Render = useMemo<ComponentType<T>>(() => {
    function OverlayRender(props: T) {
      const [isOpen, setIsOpen] = useState(false);

      useEffect(() => {
        setOpenRef.current = setIsOpen;
        return () => {
          if (setOpenRef.current === setIsOpen) setOpenRef.current = null;
        };
      }, []);

      const overlayRoot = document.getElementById('overlay-root');
      if (!overlayRoot) {
        console.warn('Overlay root not found (expected #overlay-root)');
        return null;
      }

      if (!isOpen) return null;

      return createPortal(
        <Context value={{ isOpen, setIsOpen }}>
          <Component isOpen={isOpen} close={hide} {...props} />
        </Context>,
        overlayRoot,
      );
    }
    return OverlayRender;
  }, [Component, Context, hide]);

  return { Render, show, hide };
}
