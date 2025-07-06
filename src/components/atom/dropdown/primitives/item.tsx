import type { LucideIcon } from 'lucide-react';
import { Row } from '@/components/layout/row';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';

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
  const { icon, value, className, children } = props;

  return (
    <Row role='option' tabIndex={-1}>
      {children}
    </Row>
  );
}
