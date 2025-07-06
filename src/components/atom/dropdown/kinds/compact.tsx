import { spacing } from '@/tokens/attribute.css';
import { _PrimitiveDropdownList } from '../primitives/list';
import {
  _PrimitiveDropdown,
  type DropdownProps,
} from '../primitives/primitive';
import { compactList, compactStyle } from './styles.css';

export function _CompactDropdown(props: DropdownProps) {
  const { children } = props;

  return (
    <_PrimitiveDropdown
      {...props}
      className={compactStyle}
      gap={spacing[6]}
      iconSize={16}
      indicatorSize={14}
    >
      <_PrimitiveDropdownList className={compactList}>
        {children}
      </_PrimitiveDropdownList>
    </_PrimitiveDropdown>
  );
}
