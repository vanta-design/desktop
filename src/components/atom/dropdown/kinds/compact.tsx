import { spacing } from '@/tokens/attribute.css';
import { withDefaultClassNames } from '@/utils/component';
import { _PrimitiveDropdownItem } from '../primitives/item';
import { _PrimitiveDropdownList } from '../primitives/list';
import {
  _PrimitiveDropdown,
  type DropdownProps,
} from '../primitives/primitive';
import { dropdown, item, list } from './styles/compact.css';

export function _CompactDropdown(props: DropdownProps) {
  const { children } = props;

  return (
    <_PrimitiveDropdown
      {...props}
      className={dropdown}
      gap={spacing[6]}
      iconSize={16}
      indicatorSize={14}
    >
      <_PrimitiveDropdownList className={list}>
        {children}
      </_PrimitiveDropdownList>
    </_PrimitiveDropdown>
  );
}

_CompactDropdown.Item = withDefaultClassNames(_PrimitiveDropdownItem, item);
