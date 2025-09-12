import { ChevronsUpDown } from 'lucide-react';
import { Icon } from '@/components/atom/icon';
import { Table } from '@/components/atom/table';
import { Typo } from '@/components/atom/typography';
import { Row } from '@/components/layout/row';
import { fullWidth } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import { headerCell } from './styles/header-cell.css';
import type { Column } from './types';

interface _DataTableHeaderCellProps<T extends object> {
  column: Column<T, keyof T>;
}

export function _DataTableHeaderCell<T extends object>(
  props: _DataTableHeaderCellProps<T>,
) {
  const { column } = props;

  return (
    <Table.HeaderCell width={column.width}>
      <Row className={headerCell} as='span' align='center' gap={spacing[8]}>
        <Typo.Caption className={fullWidth} weight='light'>
          {column.label}
        </Typo.Caption>
        {column.sortable !== false && <Icon icon={ChevronsUpDown} size={14} />}
      </Row>
    </Table.HeaderCell>
  );
}
