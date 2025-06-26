import { type PropsWithChildren, useState } from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { ChipGroupContext } from './context';

interface _ChipGroupProps<T extends string> extends PropsWithChildren {
  defaultActive?: T;
  onActive?: (value: T) => unknown;
}

export function _ChipGroup<T extends string>(props: _ChipGroupProps<T>) {
  const { defaultActive, onActive, children } = props;

  const [currentValue, setCurrentValue] = useState(defaultActive || null);

  return (
    <ChipGroupContext value={{ currentValue, setCurrentValue, onActive }}>
      <Row gap={spacing[8]} align='center' justify='start'>
        {children}
      </Row>
    </ChipGroupContext>
  );
}
