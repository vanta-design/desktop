import type { Dispatch, ReactNode, SetStateAction } from 'react';

export interface OverlayContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface OverlayComponentProps {
  isOpen: boolean;
  close: () => void;
}

export type OverlayComponent<P> = (
  props: OverlayComponentProps & P,
) => ReactNode;
