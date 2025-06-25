import type { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/common';
import { _PrimitiveButton } from '../primitive';
import type { ButtonPropsBase } from '../shared';
import { iconButton } from '../styles/button.css';
import iconSizeMap from '../styles/icon.css';

export interface _IconButtonProps extends ButtonPropsBase {
  icon: LucideIcon;
}

export function _IconButton(props: _IconButtonProps) {
  const { size = 'large', icon: Icon, className, ...restProps } = props;

  return (
    <_PrimitiveButton
      size={size}
      className={cn(iconButton, className)}
      {...restProps}
    >
      <Icon className={iconSizeMap[size]} />
    </_PrimitiveButton>
  );
}
