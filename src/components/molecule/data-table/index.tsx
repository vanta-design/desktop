import { useMemo, useState } from 'react';
import { Control } from '@/components/atom/control';
import { Table } from '@/components/atom/table';
import type { NonEmptyArray } from '@/types/utils';
import { _DataTableHeaderCell } from './header-cell';
import { _DataTableRow } from './row';
import type { Action, Column } from './types';

interface DataTableProps<T extends object> {
  columns: NonEmptyArray<Column<T, keyof T>>;
  data: Array<T>;
  actions?: Array<Action<T, Array<T>>>;
}

export function DataTable<T extends object>(props: DataTableProps<T>) {
  const { columns, data, actions } = props;
  const [selectedSet, setSelectedSet] = useState<Set<T>>(new Set());
  const _hasActions = useMemo(
    () => Array.isArray(actions) && actions.length > 0,
    [actions],
  );

  return (
    <Table.Root>
      <thead>
        <tr>
          <Table.HeaderCell width={54}>
            <Control.Checkbox />
          </Table.HeaderCell>
          {columns.map((column, i) => (
            <_DataTableHeaderCell key={i.toString()} column={column} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <_DataTableRow
            key={i.toString()}
            data={row}
            selected={selectedSet.has(row)}
            onClick={() => {
              const newSet = new Set(selectedSet);
              if (newSet.has(row)) {
                newSet.delete(row);
              } else {
                newSet.add(row);
              }
              setSelectedSet(newSet);
            }}
          >
            {columns.map((column, j) => (
              <Table.Body.Cell key={j.toString()}>
                {column.cell
                  ? column.cell(row[column.key], i, row)
                  : String(row[column.key])}
              </Table.Body.Cell>
            ))}
          </_DataTableRow>
        ))}
      </tbody>
    </Table.Root>
  );
}
