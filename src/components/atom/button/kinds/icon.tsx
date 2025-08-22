import type { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import { _PrimitiveButton } from '../primitive';
import type { ButtonPropsBase } from '../shared';
import { iconButton } from '../styles/button.css';
import iconSizeMap from '../styles/icon.css';

export interface _IconButtonProps extends ButtonPropsBase {
  icon: LucideIcon;
}

export function _IconButton(props: _IconButtonProps) {
  const { size = 'large', icon, className } = props;

  return (
    <_PrimitiveButton {...props} className={cn(iconButton, className)}>
      <Icon className={iconSizeMap[size]} icon={icon} />
    </_PrimitiveButton>
  );
}
