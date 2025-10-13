import { spacing } from '@/tokens/attribute.css';
import { withDefaultProps } from '@/utils/component';
import { _PrimitiveDropdown, type DropdownProps } from '../primitives/dropdown';
import { _PrimitiveDropdownItem } from '../primitives/item';
import { _PrimitiveDropdownList } from '../primitives/list';
import { _CompactDropdown } from './compact';
import { dropdown, item, list } from './styles/default.css';

export function _DefaultDropdown(props: DropdownProps) {
  const { children } = props;

  return (
    <_PrimitiveDropdown
      {...props}
      className={dropdown}
      gap={spacing[8]}
      indicatorSize={16}
    >
      <_PrimitiveDropdownList className={list}>
        {children}
      </_PrimitiveDropdownList>
    </_PrimitiveDropdown>
  );
}

_DefaultDropdown.Item = withDefaultProps(_PrimitiveDropdownItem, {
  gap: spacing[8],
  iconSize: 16,
  className: item,
});

_DefaultDropdown.Compact = _CompactDropdown;
