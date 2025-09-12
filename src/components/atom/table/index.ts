import { _TableBodyCell, _TableBodyRow } from './body';
import { _TableHeaderCell } from './header';
import { _TableRoot } from './root';

const Table = {
  Root: _TableRoot,
  HeaderCell: _TableHeaderCell,
  Body: {
    Row: _TableBodyRow,
    Cell: _TableBodyCell,
  },
};

export { Table };
