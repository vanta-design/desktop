import type { PropsWithChildren } from 'react';
import { body } from './styles/body.css';

export function _DialogBody(props: PropsWithChildren) {
  const { children } = props;

  return <main className={body}>{children}</main>;
}
