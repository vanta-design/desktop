import type { PropsWithChildren } from 'react';
import { Flex } from '@/components/layout/flex';
import { spacing } from '@/tokens/attribute.css';
import { ControlGroupContext } from './context';
import { group } from './styles.css';

interface ControlGroupProps extends PropsWithChildren {
  direction?: 'row' | 'column';
  name: string;
}

export function ControlGroup(props: ControlGroupProps) {
  const { direction, name, children } = props;

  return (
    <ControlGroupContext value={{ name }}>
      <Flex
        className={group}
        direction={direction}
        gap={direction === 'column' ? spacing[8] : spacing[24]}
        align={direction === 'column' ? 'start' : 'center'}
        justify={direction === 'column' ? 'center' : 'start'}
      >
        {children}
      </Flex>
    </ControlGroupContext>
  );
}
