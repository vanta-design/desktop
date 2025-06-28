import { Check, Minus } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import { _PrimitiveControl } from '../primitive';
import type { ControlStatus } from '../shared';
import { active, box } from '../styles/checkbox.css';

interface _CheckboxProps extends PropsWithChildren {
  status?: ControlStatus;
  defaultStatus?: ControlStatus;
}

export function _Checkbox(props: _CheckboxProps) {
  const { children, ...restProps } = props;

  return (
    <_PrimitiveControl {...restProps} role='checkbox' label={children}>
      {({ status }) => {
        return (
          <span className={cn(box, status !== 'none' && active)}>
            <Icon
              icon={
                status === 'checked'
                  ? Check
                  : status === 'indeterminate'
                    ? Minus
                    : null
              }
              size={14}
            />
          </span>
        );
      }}
    </_PrimitiveControl>
  );
}
