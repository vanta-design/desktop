import { spacing } from '@/tokens/attribute.css';
import { _PrimitiveDropdownList } from '../primitives/list';
import {
  _PrimitiveDropdown,
  type DropdownProps,
} from '../primitives/primitive';
import { _CompactDropdown } from './compact';
import { defaultList, defaultStyle } from './styles.css';

export function _DefaultDropdown(props: DropdownProps) {
  const { children } = props;

  return (
    <_PrimitiveDropdown
      {...props}
      className={defaultStyle}
      gap={spacing[8]}
      iconSize={18}
      indicatorSize={16}
    >
      <_PrimitiveDropdownList className={defaultList}>
        {children}
      </_PrimitiveDropdownList>
    </_PrimitiveDropdown>
  );
}

_DefaultDropdown.Compact = _CompactDropdown;
