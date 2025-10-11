import type { LucideIcon } from 'lucide-react';
import { spacing } from '@/tokens/attribute.css';
import { withDefaultProps } from '@/utils/component';
import { Icon } from '../../icon';
import { Typo } from '../../typography';
import { _PrimitiveBadge } from '../primitives/badge';
import type { _BadgeProps } from '../shared';
import sizeMap from './styles/default.css';

const gapMap = {
  large: spacing[6],
  small: spacing[4],
};

const TypoMap = {
  large: Typo.Caption,
  small: Typo.Footnote,
};

const iconSizeMap = {
  large: 14,
  small: 12,
};

export interface _DefaultBadgeProps extends _BadgeProps {
  icon?: LucideIcon;
}

function _DefaultBadgePrimitive(props: _DefaultBadgeProps) {
  const { icon, size, children, ...restProps } = props;
  const Typo = TypoMap[size];

  return (
    <_PrimitiveBadge
      {...restProps}
      className={sizeMap[size]}
      gap={gapMap[size]}
    >
      <Icon icon={icon} size={iconSizeMap[size]} />
      <Typo>{children}</Typo>
    </_PrimitiveBadge>
  );
}

export const _Badge = {
  Large: withDefaultProps(_DefaultBadgePrimitive, { size: 'large' }),
  Small: withDefaultProps(_DefaultBadgePrimitive, { size: 'small' }),
};
