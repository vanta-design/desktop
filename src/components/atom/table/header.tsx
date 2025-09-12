import { text } from '@/tokens/color.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Typo } from '../typography';
import { cell } from './styles/header.css';

interface _TableHeaderCellProps extends BaseProps<HAS_CHILDREN> {
  width?: number | string;
}

export function _TableHeaderCell(props: _TableHeaderCellProps) {
  const { className, children, width, ...restProps } = props;

  return (
    <th {...restProps} className={cn(cell, className)} style={{ width }}>
      {typeof children === 'string' ? (
        <Typo.Caption weight='light' color={text.tertiary}>
          {children}
        </Typo.Caption>
      ) : (
        children
      )}
    </th>
  );
}
