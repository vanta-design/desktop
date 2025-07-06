import { Check, type LucideIcon } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import { Row } from '@/components/layout/row';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import { Typo } from '../../typography';
import { useDropdownContext } from '../context';
import { active, hideIcon, item } from './styles/item.css';

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

  const { defaultValue, currentOption, setCurrentOption, setIsExpanded } =
    useDropdownContext();
  const isActive = currentOption?.value === value;
  const shouldShowIcon = isActive || icon;

  const handleClick = useCallback(() => {
    setCurrentOption({ icon, value, label: children || value });
    setIsExpanded(false);
  }, [icon, value, children, setCurrentOption, setIsExpanded]);

  useEffect(() => {
    if (!currentOption && defaultValue === value) {
      setCurrentOption({ icon, value, label: children || value });
    }
  }, [currentOption, defaultValue, icon, value, children, setCurrentOption]);

  return (
    <Row
      className={cn(item, isActive && active, className)}
      gap={gap}
      align='center'
      justify='start'
      role='option'
      tabIndex={-1}
      onClick={handleClick}
    >
      <Icon
        className={shouldShowIcon ? undefined : hideIcon}
        icon={isActive ? Check : icon || Check}
        size={iconSize}
      />
      <Typo.Body>{children}</Typo.Body>
    </Row>
  );
}
