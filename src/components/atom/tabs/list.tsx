import { Column } from '@/components/layout/column';
import { Row } from '@/components/layout/row';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { useTabsContext } from './context';

interface _TabsListProps extends BaseProps<HAS_CHILDREN> {}

export function _TabsList(props: _TabsListProps) {
  const { orientation } = useTabsContext();

  return orientation === 'horizontal' ? (
    <Row
      {...props}
      role='tablist'
      aria-orientation={orientation}
      justify='start'
    />
  ) : (
    <Column
      {...props}
      role='tablist'
      aria-orientation={orientation}
      align='start'
    />
  );
}
