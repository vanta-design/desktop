import type { PropsWithChildren } from 'react';
import { Flex } from '@/components/layout/flex';
import { backdrop } from './styles/backdrop.css';

interface _DialogBackdropProps extends PropsWithChildren {
  close: () => void;
}

export function _DialogBackdrop(props: _DialogBackdropProps) {
  const { close, children } = props;

  return (
    <Flex className={backdrop} align='center' justify='center' onClick={close}>
      {children}
    </Flex>
  );
}
