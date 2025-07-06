import { Check, type LucideIcon } from 'lucide-react';
import { useCallback } from 'react';
import { Row } from '@/components/layout/row';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import { Typo } from '../../typography';
import { useDropdownContext } from '../context';
import { active, iconStyle, item } from './styles/item.css';

export interface DropdownItemProps extends BaseProps<HAS_CHILDREN> {
  icon?: LucideIcon;
  value: string;
  children?: string;
}

export interface _PrimitiveDropdownItemProps extends DropdownItemProps {
  gap: string;
  iconSize: number;
}

export function _PrimitiveDropdownItem(props: _PrimitiveDropdownItemProps) {
  const { icon, value, gap, iconSize, className, children } = props;

  const { currentOption, setCurrentOption } = useDropdownContext();

  const handleClick = useCallback(() => {
    setCurrentOption({ icon, value, label: children || value });
  }, [icon, value, children, setCurrentOption]);

  return (
    <Row
      className={cn(item, currentOption?.value === value && active, className)}
      gap={gap}
      align='center'
      justify='start'
      role='option'
      tabIndex={-1}
      onClick={handleClick}
    >
      <Icon className={iconStyle} icon={icon || Check} size={iconSize} />
      <Typo.Body>{children}</Typo.Body>
    </Row>
  );
}
