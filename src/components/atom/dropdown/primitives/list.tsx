import { Container } from '@/components/layout/container';
import { glass } from '@/styles/effect.css';
import { fullWidth } from '@/styles/utils.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { list } from './styles/list.css';

interface _PrimitiveDropdownListProps extends BaseProps<HAS_CHILDREN> {}

export function _PrimitiveDropdownList(props: _PrimitiveDropdownListProps) {
  const { className, children } = props;

  return (
    <Container
      className={cn(list, fullWidth, glass, className)}
      vertical='narrow'
      horizontal='narrow'
    >
      {children}
    </Container>
  );
}
