import type { PropsWithChildren } from 'react';
import { cn } from '@/utils/common';
import { _PrimitiveControl } from '../primitive';
import type { ControlStatus } from '../shared';
import { activeStyle, box, thumb } from '../styles/switch.css';

interface _SwitchProps extends PropsWithChildren {
  active?: boolean;
  defaultActive?: boolean;
}

export function _Switch(props: _SwitchProps) {
  const { active, defaultActive, children } = props;

  const status: ControlStatus = active ? 'checked' : 'none';
  const defaultStatus: ControlStatus = defaultActive ? 'checked' : 'none';

  return (
    <_PrimitiveControl
      role='checkbox'
      label={children}
      status={status}
      defaultStatus={defaultStatus}
    >
      {({ status }) => (
        <span className={cn(box, status === 'checked' && activeStyle)}>
          <span className={thumb} />
        </span>
      )}
    </_PrimitiveControl>
  );
}
