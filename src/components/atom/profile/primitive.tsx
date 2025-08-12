import type { ReactNode } from 'react';
import { cn } from '@/utils/common';
import { profile, sizeMap, status, wrapper } from './styles.css';

export type ProfileSize = 'small' | 'regular' | 'medium' | 'large';

export interface _PrimitiveProfileProps {
  src: string;
  alt: string;
  size?: ProfileSize;
  indicator?: ReactNode;
}

export function _PrimitiveProfile(props: _PrimitiveProfileProps) {
  const { src, alt, size = 'regular', indicator } = props;

  return (
    <div className={cn(wrapper, sizeMap[size])}>
      <img className={profile} src={src} alt={alt} />
      <span className={status}>{indicator}</span>
    </div>
  );
}
