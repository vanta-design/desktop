import { Container } from '@/components/layout/container';
import { glass } from '@/styles/effect.css';
import { fillWidth } from '@/styles/utils.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { useDropdownContext } from '../context';
import { list } from './styles/list.css';

interface _PrimitiveDropdownListProps extends BaseProps<HAS_CHILDREN> {}

export function _PrimitiveDropdownList(props: _PrimitiveDropdownListProps) {
  const { className, children } = props;

  const { isExpanded } = useDropdownContext();

  return (
    <Container
      className={cn(list, fillWidth, glass, className)}
      vertical='narrow'
      horizontal='narrow'
      role='listbox'
      aria-hidden={!isExpanded}
    >
      {children}
    </Container>
  );
}
