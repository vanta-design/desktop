import type { PropsWithChildren } from 'react';
import { Flex } from '@/components/layout/flex';
import { backdrop } from './styles/root.css';

interface _DialogRootProps extends PropsWithChildren {
  preventClose?: boolean;
  close: () => void;
}

export function _DialogRoot(props: _DialogRootProps) {
  const { preventClose, close, children } = props;

  return (
    <Flex
      className={backdrop}
      align='center'
      justify='center'
      onClick={preventClose ? undefined : close}
    >
      {children}
    </Flex>
  );
}
