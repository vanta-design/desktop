import type { Semantic } from '@/types/color';
import type { _PrimitiveBadgeProps } from './primitives/badge';

export type BadgeSize = 'large' | 'small';

export interface _BadgeProps extends _PrimitiveBadgeProps {
  size: BadgeSize;
  semantic?: Semantic;
}
