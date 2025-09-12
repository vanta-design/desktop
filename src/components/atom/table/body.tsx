import type { PropsWithChildren } from 'react';
import { Typo } from '../typography';
import { cell, row } from './styles/body.css';

interface _TableBodyRowProps extends PropsWithChildren {}

export function _TableBodyRow(props: _TableBodyRowProps) {
  const { children } = props;

  return <tr className={row}>{children}</tr>;
}

interface _TableBodyCellProps extends PropsWithChildren {}

export function _TableBodyCell(props: _TableBodyCellProps) {
  const { children } = props;

  return (
    <td className={cell}>
      {typeof children === 'string' ? (
        <Typo.Caption>{children}</Typo.Caption>
      ) : (
        children
      )}
    </td>
  );
}
