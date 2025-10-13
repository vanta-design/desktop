import type { PropsWithChildren } from 'react';
import { Control } from '@/components/atom/control';
import { Table } from '@/components/atom/table';

interface _DataTableRowProps<T extends object> extends PropsWithChildren {
  data: T;
  selected?: boolean;
  onClick?: () => unknown;
}

export function _DataTableRow<T extends object>(props: _DataTableRowProps<T>) {
  const { selected, onClick, children } = props;

  return (
    <Table.Body.Row onClick={onClick}>
      <Table.Body.Cell>
        <Control.Checkbox status={selected ? 'checked' : 'none'} />
      </Table.Body.Cell>
      {children}
    </Table.Body.Row>
  );
}
