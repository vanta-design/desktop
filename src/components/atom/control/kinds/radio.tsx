import type { PropsWithChildren } from 'react';
import { cn } from '@/utils/common';
import { _PrimitiveControl } from '../primitive';
import type { ControlStatus } from '../shared';
import { activeStyle, box } from '../styles/radio.css';

interface _RadioProps extends PropsWithChildren {
  active?: boolean;
  defaultActive?: boolean;
}

export function _Radio(props: _RadioProps) {
  const { active, defaultActive, children } = props;

  const status: ControlStatus = active ? 'checked' : 'none';
  const defaultStatus: ControlStatus = defaultActive ? 'checked' : 'none';

  return (
    <_PrimitiveControl
      role='radio'
      label={children}
      status={status}
      defaultStatus={defaultStatus}
    >
      {({ status }) => (
        <span className={cn(box, status === 'checked' && activeStyle)} />
      )}
    </_PrimitiveControl>
  );
}
