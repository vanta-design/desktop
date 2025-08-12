import type { LucideIcon } from 'lucide-react';
import { withDefaultProps } from '@/utils/component';
import { Icon } from '../../icon';
import { _PrimitiveBadge } from '../primitives/badge';
import type { _BadgeProps } from '../shared';
import sizeMap from './styles/icon.css';

const iconSizeMap = {
  large: 16,
  small: 12,
};

interface _IconBadgeProps extends _BadgeProps {
  icon: LucideIcon;
}

function _IconBadgePrimitive(props: _IconBadgeProps) {
  const { icon, size, ...restProps } = props;

  return (
    <_PrimitiveBadge {...restProps} className={sizeMap[size]}>
      <Icon icon={icon} size={iconSizeMap[size]} />
    </_PrimitiveBadge>
  );
}

export const _IconBadge = {
  Large: withDefaultProps(_IconBadgePrimitive, { size: 'large' }),
  Small: withDefaultProps(_IconBadgePrimitive, { size: 'small' }),
};
