import type { Semantic } from '@/types/color';
import type { _PrimitiveBadgeProps } from './primitive';

export type BadgeSize = 'large' | 'small';

export interface _BadgeProps extends _PrimitiveBadgeProps {
  size: BadgeSize;
  semantic?: Semantic;
}
