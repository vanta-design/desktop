import { spacing } from '@/tokens/attribute.css';
import { _PrimitiveDropdownList } from '../primitives/list';
import {
  _PrimitiveDropdown,
  type DropdownProps,
} from '../primitives/primitive';
import { _CompactDropdown } from './compact';
import { dropdown, list } from './styles/default.css';

export function _DefaultDropdown(props: DropdownProps) {
  const { children } = props;

  return (
    <_PrimitiveDropdown
      {...props}
      className={dropdown}
      gap={spacing[8]}
      iconSize={18}
      indicatorSize={16}
    >
      <_PrimitiveDropdownList className={list}>
        {children}
      </_PrimitiveDropdownList>
    </_PrimitiveDropdown>
  );
}

_DefaultDropdown.Compact = _CompactDropdown;
