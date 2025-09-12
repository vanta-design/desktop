import { Column } from '@/components/layout/column';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { useTabsContext } from './context';

interface _TabsListProps extends BaseProps<HAS_CHILDREN> {}

export function _TabsList(props: _TabsListProps) {
  const { orientation } = useTabsContext();

  return orientation === 'horizontal' ? (
    <Row
      {...props}
      gap={spacing[8]}
      role='tablist'
      aria-orientation={orientation}
      justify='start'
    />
  ) : (
    <Column
      {...props}
      gap={spacing[8]}
      role='tablist'
      aria-orientation={orientation}
      align='start'
    />
  );
}
